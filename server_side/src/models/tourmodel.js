import mongoose from "mongoose";
import Itinerary from "./itinerarymodel.js";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
    unique: true,
  },

  price: {
    type: Number,
    required: true,
  },

  numberofdays: {
    type: Number,
    required: true,
  },

  availability: {
    type: Boolean,
  },

  country: {
    type: String,
    enum: ["Nepal", "India", "Bhutan"],
    required: true,
  },

  itinerary: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Itinerary",
      required: true,
    },
  ],
});

const Tours = mongoose.model("Tour", tourSchema);

export default Tours;
