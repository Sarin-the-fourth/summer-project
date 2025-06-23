import Bike from "../models/bikemodel.js";

export const getBikesWithAvailability = async (filter = {}) => {
  return await Bike.aggregate([
    { $match: filter },
    {
      $lookup: {
        from: "bookings",
        localField: "_id",
        foreignField: "bike",
        as: "bookings",
      },
    },
    {
      $addFields: {
        availability: {
          $not: {
            $anyElementTrue: {
              $map: {
                input: "$bookings",
                as: "b",
                in: { $eq: ["$$b.status", "approved"] },
              },
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        bike_number: 1,
        bike_brand: 1,
        bike_model: 1,
        availability: 1,
        bike_description: 1,
        bike_price: 1,
        count: 1,
      },
    },
  ]);
};

export const getBikeModelCounts = async () => {
  return await Bike.aggregate([
    {
      $group: {
        _id: "$bike_model",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        bike_model: "$_id",
        count: 1,
      },
    },
  ]);
};
