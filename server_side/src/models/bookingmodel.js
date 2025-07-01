import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },

    client_name: {
      type: String,
      required: true,
      trim: true,
    },

    client_phone: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      required: true,
    },

    pax_no: {
      type: Number,
      required: true,
    },

    bike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bike",
        required: true,
      },
    ],

    assigned_bike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bike",
        required: false,
      },
    ],

    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },

    enquiry: {
      type: String,
    },

    guide: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "confirmed", "completed"],
      default: "pending",
    },
  },
  { timestamp: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
