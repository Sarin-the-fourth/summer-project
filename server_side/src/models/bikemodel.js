import {mongoose} from "mongoose";

const bikeSchema = new mongoose.Schema({
    bike_number: {
        type: String,
        required: true,
        unique: true
    },

    //image??
    bike_brand: {
        type: String,
        required: true
    },

    bike_model: {
        type: String,
        required: true
    },

    condition: {
        enum: ['excellent', 'running', 'needs repair'],
        type: String,
        required: true
    }
})

const Bike = mongoose.model("Bike", bikeSchema)
export default Bike;