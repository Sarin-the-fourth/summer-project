import mongoose from "mongoose";

export const itinerarySchema = new mongoose.Schema({
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    required: true,
  },

  day: {
    type: Number,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const itinerary = mongoose.model("Itinerary", itinerarySchema);

export default itinerary;
