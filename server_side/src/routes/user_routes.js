import { Router } from "express";
import {
  get_bikes,
  book_tour,
  get_bikes_by_model,
  get_tour_details,
  get_all_tours,
} from "../controller/usercontroller.js";

const router = Router();

// Route to get all bikes
router.get("/bikes", get_bikes);
router.post("/book-tour/:tourId", book_tour);
router.get("/bikes/model/:model", get_bikes_by_model);
router.get("/tour/:id", get_tour_details);
router.get("/tours", get_all_tours);

export default router;
