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

  allTours: [],

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

      set({ tour: res.data.tour, itinerary: res.data.itinerary });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loadingTours: false });
    }
  },

  getAllTours: async () => {
    try {
      set({ loadingTours: true });

      const nepalRes = await axiosInstance.get("/user/tours/Nepal");
      const indiaRes = await axiosInstance.get("/user/tours/India");

      const nepalTours = nepalRes.data?.tours ?? [];
      const indiaTours = indiaRes.data?.tours ?? [];

      console.log("📦 Nepal Tours:", nepalTours);
      console.log("📦 India Tours:", indiaTours);

      set({
        allTours: [...nepalTours, ...indiaTours],
        loadingTours: false,
      });
    } catch (error) {
      console.error("❌ Error fetching tours:", error);
      set({ loadingTours: false });
    }
  },
}));
