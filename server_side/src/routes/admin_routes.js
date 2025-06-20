import { Router } from "express";
import {
  add_bikes,
  get_approved_bookings,
  get_pending_bookings,
  createTourWithItinerary,
  getTourWithItinerary,
} from "../controller/admincontroller.js";
import { respond_booking, get_bikes } from "../controller/admincontroller.js";
import { is_admin } from "../middleware/authmiddle.js";

const router = Router();

// router.use(is_admin);
router.post("/add-tour", createTourWithItinerary);
router.get("/tour/:tourId", getTourWithItinerary);

router.post("/add-bike", add_bikes);
router.get("/bookings/approved", get_approved_bookings);
router.get("/bookings/pending", get_pending_bookings);
router.patch("/respond-booking/:bookingId", respond_booking);
router.get("/get_bikes/:bikeId", get_bikes);

export default router;
