import { mongoose } from "mongoose";

const bikeSchema = new mongoose.Schema({
  bike_number: {
    type: String,
    required: true,
    unique: true,
  },

  //image??
  bike_brand: {
    type: String,
    required: true,
  },

  bike_model: {
    type: String,
    required: true,
  },

  bike_description: {
    type: String,
    required: true,
  },

  condition: {
    enum: ["Excellent", "Running", "Needs Repair"],
    type: String,
    required: true,
  },

  bike_image: {
    type: String,
    required: true,
  },

  bike_price: {
    type: Number,
    required: true,
  },

  count: {
    type: Number,
    default: 1,
  },
});

const Bike = mongoose.model("Bike", bikeSchema);
export default Bike;
