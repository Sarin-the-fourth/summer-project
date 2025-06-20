import Tour from "../models/tourmodel.js";
import Bike from "../models/bikemodel.js";
import Itinerary from "../models/itinerarymodel.js";
import Booking from "../models/bookingmodel.js";
import sendMail from "../utils/sendMail.js";
import cloudinary from "../utils/CloudinaryConnect.js";

export const createTourWithItinerary = async (req, res) => {
  try {
    // Extract tour data from request body
    const {
      name,
      description,
      location,
      introduction,
      price,
      altitude,
      numberofdays,
      country,
      availability = true,
      cover_image,
      gallery_images,
      itinerary,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !description ||
      !location ||
      !introduction ||
      !price ||
      !altitude ||
      !numberofdays ||
      !country ||
      !cover_image ||
      !itinerary
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All required fields must be provided, including cover image and itinerary",
      });
    }

    // Validate country
    if (!["Nepal", "India", "Bhutan"].includes(country)) {
      return res.status(400).json({
        success: false,
        message: "Country must be Nepal, India, or Bhutan",
      });
    }

    // Check if tour with same name or location already exists
    const existingTour = await Tour.findOne({
      $or: [{ name }, { location }],
    });

    if (existingTour) {
      return res.status(409).json({
        success: false,
        message: "Tour with this name or location already exists",
      });
    }

    // Prepare tour data
    const tourData = {
      name,
      description,
      location,
      introduction,
      price: Number(price),
      altitude: Number(altitude),
      numberofdays: Number(numberofdays),
      country,
      availability: availability === "true" || availability === true,
    };

    // Upload cover image to Cloudinary
    if (cover_image && cover_image.startsWith("data:image")) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(cover_image, {
          folder: "Tours/CoverImages",
          quality: "auto:best",
          format: "auto",
          eager: [
            {
              width: 1200,
              crop: "scale", // Maintain aspect ratio
              quality: "auto:best",
            },
          ],
          transformation: [{ quality: "auto:best" }, { fetch_format: "auto" }],
        });

        // Store both original and transformed versions
        tourData.cover_image = {
          original: uploadResponse.secure_url,
          thumbnail: uploadResponse.eager[0].secure_url,
          public_id: uploadResponse.public_id,
        };
      } catch (err) {
        console.error("Error uploading cover image:", err);
        return res.status(400).json({
          success: false,
          message: `Error uploading cover image: ${err.message}`,
        });
      }
    }

    // Upload gallery images to Cloudinary
    const uploadedGalleryImages = [];
    if (
      gallery_images &&
      Array.isArray(gallery_images) &&
      gallery_images.length > 0
    ) {
      try {
        for (const image of gallery_images) {
          if (image.startsWith("data:image")) {
            const uploadResponse = await cloudinary.uploader.upload(image, {
              folder: "Tours/GalleryImages",
            });
            uploadedGalleryImages.push(uploadResponse.secure_url);
          }
        }
        tourData.gallery_images = uploadedGalleryImages;
      } catch (err) {
        console.error("Error uploading gallery images:", err);
        return res.status(400).json({
          success: false,
          message: "Error uploading gallery images. Tour cannot be created!",
        });
      }
    }

    // Create new tour
    const newTour = new Tour(tourData);

    // Save tour to database
    const savedTour = await newTour.save();

    // Prepare itinerary items with tour reference
    const itineraryItems = itinerary.map((item) => ({
      tour: savedTour._id,
      day: Number(item.day),
      title: item.title,
      description: item.description,
    }));

    // Validate itinerary items
    if (itineraryItems.length !== Number(numberofdays)) {
      return res.status(400).json({
        success: false,
        message: "Number of itinerary items must match number of days",
      });
    }

    // Save all itinerary items
    const savedItinerary = await Itinerary.insertMany(itineraryItems);

    return res.status(201).json({
      success: true,
      message: "Tour and itinerary created successfully",
      tour: savedTour,
      itinerary: savedItinerary,
    });
  } catch (error) {
    console.error("Error creating tour:", error);
    if (error.name === "MongoServerError" && error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${
          field === "name" ? "Tour name" : "Location"
        } is already registered`,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getTourWithItinerary = async (req, res) => {
  try {
    const tourId = req.params.tourId;

    // Get tour details
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // Get itinerary for this tour
    const itinerary = await Itinerary.find({ tour: tourId }).sort({ day: 1 });

    return res.status(200).json({
      success: true,
      tour,
      itinerary,
    });
  } catch (error) {
    console.error("Error fetching tour:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const add_bikes = async (req, res) => {
  try {
    const { bike_number, bike_brand, bike_model, condition } = req.body;

    if (!bike_number || !bike_brand || !bike_model || !condition) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingBike = await Bike.findOne({ bike_number });
    if (existingBike) {
      return res.status(409).json({
        message: "Bike number already exists",
      });
    }

    const addBike = new Bike({
      bike_number,
      bike_brand,
      bike_model,
      condition,
    });

    await addBike.save();
    return res.status(200).json({ message: "Bike added successfully" });
  } catch (error) {
    console.log("Error in add_bikes:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const get_approved_bookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ status: "approved" })
      .populate("tour", "name location price numberofdays availability")
      .populate("bike", "bike_number bike_model availability")
      .select("client_name client_phone email pax_no name bike");
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }
    return res.status(200).json({
      message: "Bookings fetched successfully",
      bookings: bookings,
    });
  } catch (error) {
    console.log("Error in get_bookings:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const get_pending_bookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ status: "pending" })
      .populate("tour", "name location price numberofdays availability")
      .populate("bike", "bike_number bike_model availability")
      .select("client_name client_phone email pax_no name bike");
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }
    return res.status(200).json({
      message: "Bookings fetched successfully",
      bookings: bookings,
    });
  } catch (error) {
    console.log("Error in get_bookings:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const get_tour = async (req, res) => {
  try {
    const { tourId } = req.params;
    const tour = await Tour.findById(tourId)
      .select("name location price numberofdays availability")
      .populate("itinerary", "day title description");

    if (!tour) {
      res.status(400).json({
        message: "Tour not found",
      });
    }

    const itinerary = await Itinerary.find({ tour: tourId }).select(
      "day title description"
    );

    return res.status(200).json({
      message: "Tour fetched successfully",
      ...tour.toObject(),
      itinerary, // Include the itinerary in the response
    });
  } catch (error) {
    console.log("Error in get_tour:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const get_bikes = async (req, res) => {
  try {
    const { bikeId } = req.params;

    const bikes = await Bike.findById(bikeId).select(
      "bike_number bike_brand bike_model condition availability"
    );

    if (!bikes) {
      return res.status(404).json({
        message: "Bike not found",
      });
    }

    return res.status(200).json({
      message: "Bike fetched successfully",
      bikes,
    });
  } catch (error) {
    console.log("Error in get_bikes:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const respond_booking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;

    if (!bookingId || !status) {
      return res
        .status(400)
        .json({ message: "Booking ID and status are required" });
    }

    const validStatuses = ["approved", "rejected", "completed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status;

    //sending email notification based on status
    if (status === "approved") {
      await sendMail(
        booking.email,
        "Booking Confirmation",
        `Dear ${booking.client_name},\n\nYour booking has been approved! We're excited to have you on board.\n\nThank you for choosing us.\n\nBest regards,\nThe Team`
      );
    }
    await booking.save();

    return res.status(200).json({
      message: `Booking ${status} successfully`,
      booking,
    });
  } catch (error) {
    console.log("Error in respond_booking:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
