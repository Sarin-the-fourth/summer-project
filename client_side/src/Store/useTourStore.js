import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useTourStore = create((set) => ({
  toursofNepal: [],
  toursofIndia: [],
  loadingNepal: false,
  loadingIndia: true,

  tour: null,
  itinerary: [],
  loadingTours: true,

  getTourNepal: async () => {
    try {
      set({ loadingNepal: true });
      const res = await axiosInstance.get("/user/tours/Nepal");

      set({ toursofNepal: res.data.tours || [] });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loadingNepal: false });
    }
  },

  getTourIndia: async () => {
    try {
      set({ loadingIndia: true });
      const res = await axiosInstance.get("/user/tours/India");

      set({ toursofIndia: res.data.tours || [] });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loadingIndia: false });
    }
  },

  getTourById: async (id) => {
    try {
      set({ loadingTours: true });
      const res = await axiosInstance.get(`/user/tour-itinerary/${id}`);
      console.log(res.data);

      set({ tour: res.data.tour, itinerary: res.data.itinerary });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loadingTours: false });
    }
  },
}));
