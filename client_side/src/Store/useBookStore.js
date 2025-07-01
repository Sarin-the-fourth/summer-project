import { create } from "zustand";
import { axiosInstance } from "../assets/axios";
import { toast } from "react-toastify";

export const useBookStore = create((set) => ({
  bookings: [],
  loadingBookings: false,

  fetchBookings: async () => {
    try {
      set({ loadingBookings: true });
      const res = await axiosInstance.get("/admin/bookings");
      set({ bookings: res.data || [] });
      set({ loadingBookings: false });
    } catch (err) {
      console.log("Error fetching Bookings: ", err);
      toast.error("Failed to Fetch Bookings");
    } finally {
      set({ loadingBookings: false });
    }
  },

  addBookings: async (id, formData) => {
    try {
      set({ loadingBookings: true });
      const res = await axiosInstance.post(`/user/book-tour/${id}`, formData);
      set({ bookings: res.data.formData });
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(err.response.data.message || "Something went wrong");
    } finally {
      set({ loadingBookings: false });
    }
  },
}));
