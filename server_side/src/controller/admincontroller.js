import Tour from "../models/tourmodel.js";
import Bike from "../models/bikemodel.js";
import Itinerary from "../models/itinerarymodel.js";
import Booking from "../models/bookingmodel.js";
import sendMail from "../utils/sendMail.js";

export const add_tours = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      price,
      numberofdays,
      country,
      availability,
    } = req.body;

    if (
      !name ||
      !description ||
      !location ||
      !price ||
      !numberofdays ||
      !country ||
      availability === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingtour = await Tour.findOne({ name, location });
    if (existingtour) {
      return res.status(409).json({
        message: "Tour already exists",
      });
    }

    const addTour = new Tour({
      name,
      description,
      location,
      price,
      numberofdays,
      country,
      availability,
    });

    await addTour.save();

    return res.status(201).json({
      message: "Tour added successfully",
      tour: addTour,
    });
  } catch (error) {
    console.log("Error in add_trips:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const add_itinerary = async (req, res) => {
  try {
    const tour = req.params.tourId;
    const tourExists = await Tour.findById(tour);
    if (!tourExists) {
      return res.status(404).json({
        message: "Tour not found",
      });
    }
    const { day, title, description } = req.body;

    if (!day || !title || !description) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    const addItinerary = new Itinerary({
      tour,
      day,
      title,
      description,
    });

    await addItinerary.save();

    res.status(201).json({
      message: "Itinerary added successfully",
      itinerary: addItinerary,
    });
  } catch (error) {
    console.log("Error in add_itinerary", error);
    return res.status(500).json({
      message: "Internal server error",
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
