import { create } from "zustand";
import { axiosInstance } from "../assets/axios";
import { toast } from "react-toastify";

export const useBikeStore = create((set) => ({
  bikes: [],
  loadingBikes: false,
  selectedBike: null,

  fetchBikes: async () => {
    try {
      set({ loadingBikes: true });
      const res = await axiosInstance.get("/user/bikes");
      set({ bikes: res.data.bikes || [] });
    } catch (err) {
      console.error("Error fetching bikes:", err);
      toast.error("Failed to fetch bikes");
    } finally {
      set({ loadingBikes: false });
    }
  },

  getBikeById: async (bikeId) => {
    try {
      const res = await axiosInstance.get(`/user/get_bike/${bikeId}`);
      set({ selectedBike: res.data.bike });
    } catch (err) {
      console.error("Error fetching bike by ID:", err);
      toast.error("Failed to load bike details");
    }
  },
}));
