import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useTourStore = create((set) => ({
  toursofNepal: [],
  toursofIndia: [],
  loading: true,

  getTourNepal: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get("/user/tour/Nepal");

      set({ toursofNepal: res.data.tours });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  getTourIndia: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get("/user/tour/India");

      set({ toursofIndia: res.data.tours });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
