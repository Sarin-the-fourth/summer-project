import Bike from "../models/bikemodel.js";

export const getBikesWithAvailability = async (filter = {}) => {
  return await Bike.aggregate([
    { $match: filter },
    {
      $lookup: {
        from: "bookings",
        localField: "_id",
        foreignField: "bike",
        as: "bookings"
      }
    },
    {
      $addFields: {
        availability: {
          $not: {
            $anyElementTrue: {
              $map: {
                input: "$bookings",
                as: "b",
                in: { $eq: ["$$b.status", "approved"] }
              }
            }
          }
        }
      }
    },
    {
      $project: {
        _id: 1,
        bike_number: 1,
        bike_brand: 1,
        bike_model: 1,
        availability: 1
      }
    }
  ]);
};