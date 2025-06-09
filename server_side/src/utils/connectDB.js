import { mongoose } from "mongoose";


//connection
const connectdb = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/wildtracksnepal");
    if (db) {
      console.log("MongoDB connected");
    }
  } catch (err) {
    console.log("Mongo Error", err);
  }
};

export default connectdb;
