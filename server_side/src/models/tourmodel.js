import mongoose from "mongoose";

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

  introduction: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  altitude: {
    type: Number,
    required: true,
  },

  numberofdays: {
    type: Number,
    required: true,
  },

  availability: {
    type: Boolean,
    default: true,
  },

  cover_image: {
    type: String,
    required: true,
  },

  gallery_images: [
    {
      type: String,
    },
  ],

  country: {
    type: String,
    enum: ["Nepal", "India", "Bhutan"],
    required: true,
  },
});

const Tours = mongoose.model("Tour", tourSchema);

export default Tours;
