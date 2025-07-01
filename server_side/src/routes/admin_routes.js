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
  get_all_bookings,
  free_bikes_after_tour,
  assign_bikes,
  delete_pending_bookings,
  edit_booking,
} from "../controller/admincontroller.js";
import { respond_booking, get_bikes } from "../controller/admincontroller.js";

const router = Router();

// router.use(is_admin);
router.post("/add-tour", createTourWithItinerary);
router.get("/tour/:tourId", getTourWithItinerary);

router.post("/add-bike", add_bikes);
router.delete("/delete-bike/:bike_number", delete_bike);
router.put("/update-bike-condition/:bike_number", update_bike_condition);

router.get("/bookings", get_all_bookings);
router.get("/bookings/approved", get_approved_bookings);
router.get("/bookings/pending", get_pending_bookings);
router.patch("/respond-booking/:bookingId", respond_booking);
router.post("/edit-booking/:bookingId", edit_booking);
router.delete("/delete-pending-booking/:bookingId", delete_pending_bookings);

router.post("/assign-bikes", assign_bikes);

router.get("/get_bikes/:bikeId", get_bikes);
router.get("/get_bikes", get_all_bikes);

router.post("/release-expired-bikes", free_bikes_after_tour);

export default router;
