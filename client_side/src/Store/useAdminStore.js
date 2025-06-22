import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useAdminStore = create((set) => ({
  loadingAddTour: false,
  loadingAddBike: false,

  addTour: async (tourdata) => {
    try {
      set({ loadingAddTour: true });
      const res = await axiosInstance.post("/admin/add-tour", tourdata);

      toast.success(res.data.message);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ loadingAddTour: false });
    }
  },

  addBike: async (bikedata) => {
    try {
      set({ loadingAddBike: true });
      const res = await axiosInstance.post("/admin/add-bike", bikedata);

      toast.success(res.data.message);
    } catch (error) {
      console.error("Error adding bike:", error);
      toast.error(error.response?.data?.message || "Failed to add bike");
    } finally {
      set({ loadingAddBike: false });
    }
  },

  deleteBike: async (bikeid) => {
    try {
      await axiosInstance.delete(`/admin/delete_bike/${bikeid}`);
      toast.success("Bike deleted successfully");
    } catch (error) {
      console.error("Error deleting bike:", error);
      toast.error(error.response?.data?.message || "Failed to delete bike");
    }
  },
}));
