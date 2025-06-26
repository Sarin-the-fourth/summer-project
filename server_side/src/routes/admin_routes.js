import { Router } from "express";
import {
  add_bikes,
  get_approved_bookings,
  get_pending_bookings,
  createTourWithItinerary,
  getTourWithItinerary,
  get_all_bikes,
  delete_bike,
  update_bike_condition,
} from "../controller/admincontroller.js";
import { respond_booking, get_bikes } from "../controller/admincontroller.js";

const router = Router();

// router.use(is_admin);
router.post("/add-tour", createTourWithItinerary);
router.get("/tour/:tourId", getTourWithItinerary);

router.post("/add-bike", add_bikes);
router.delete("/delete-bike/:bike_number", delete_bike);
router.put("/update-bike-condition/:bike_number", update_bike_condition);

router.get("/bookings/approved", get_approved_bookings);
router.get("/bookings/pending", get_pending_bookings);
router.patch("/respond-booking/:bookingId", respond_booking);
router.get("/get_bikes/:bikeId", get_bikes);
router.get("/get_bikes", get_all_bikes);

export default router;
