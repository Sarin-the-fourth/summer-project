import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useAdminStore = create((set) => ({
  loadingAddTour: false,
  loadingAddBike: false,
  loadingUpdateCondition: false,

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

  deletebike: async (bike_number) => {
    try {
      await axiosInstance.delete(
        `/admin/delete-bike/${encodeURIComponent(bike_number)}`
      );
      toast.success("Bike deleted successfully");
    } catch (error) {
      console.error("Error deleting bike:", error);
      toast.error(error.response?.data?.message || "Failed to delete bike");
    }
  },

  updateBikeCondition: async (bike_number, condition) => {
    try {
      set({ loadingUpdateCondition: true });
      const res = await axiosInstance.put(
        `/admin/update-bike-condition/${encodeURIComponent(bike_number)}`,
        { condition }
      );
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error updating condition:", error);
      toast.error(
        error.response?.data?.message || "Failed to update condition"
      );
    } finally {
      set({ loadingUpdateCondition: false });
    }
  },

  fetchAllBikes: async () => {
    try {
      const res = await axiosInstance.get("/admin/get_bikes");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch bikes:", error);
      return [];
    }
  },
}));
