import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useAdminStore = create((set) => ({
  loadingAddTour: false,
  loadingAddBike: false,
  loadingUpdateCondition: false,
  bookings: [],

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

  fetchPendingBookings: async () => {
    try {
      const res = await axiosInstance.get("/admin/bookings/pending");
      set({ bookings: res.data.bookings });
      toast.success("Pending bookings fetched");
    } catch (error) {
      console.log("Failed to fetch bookings", error);
      toast.error("Failed to fetch bookings");
      set({ bookings: [] }); // Optional fallback
    }
  },

  deletependingbooking: async (id) => {
    try {
      const res = await axiosInstance.delete(
        `/admin/delete-pending-booking/${id}`
      );
      toast.success(res.data.message || "Booking deleted successfully");

      // Refresh pending bookings after deletion
      await useAdminStore.getState().fetchPendingBookings();
    } catch (error) {
      console.error("Failed to delete booking:", error);
      toast.error(error.response?.data?.message || "Failed to delete booking");
    }
  },

  assignBikes: async (bookingId, bikeNumbers) => {
    try {
      const res = await axiosInstance.post("/admin/assign-bikes", {
        bookingId,
        bikeNumbers,
      });
      toast.success(res.data.message || "Bikes assigned successfully");
      // Refresh pending bookings after assignment
      await useAdminStore.getState().fetchPendingBookings();
    } catch (error) {
      console.error("Failed to assign bikes:", error);
      toast.error(error.response?.data?.error || "Failed to assign bikes");
    }
  },

  fetchApprovedBookings: async () => {
    try {
      const res = await axiosInstance.get("/admin/bookings/approved");
      set({ bookings: res.data.bookings });
      toast.success("Approved bookings fetched");
    } catch (error) {
      console.log("Failed to fetch bookings", error);
      toast.error("Failed to fetch bookings");
      set({ bookings: [] }); // Optional fallback
    }
  },

  respondBookings: async (id, status) => {
    try {
      const res = await axiosInstance.patch(`admin/respond-booking/${id}`, {
        status,
      });
      toast.success(res.data.message || "Booking updated");

      // Optional: refresh bookings after status update
      await useAdminStore.getState().fetchPendingBookings();
      await useAdminStore.getState().fetchApprovedBookings();
    } catch (error) {
      console.log("Failed to respond bookings", error);
      toast.error("Failed to respond bookings");
      set({ bookings: [] }); // Optional fallback
    }
  },

  editBooking: async (id, updatedData) => {
    try {
      const res = await axiosInstance.post(
        `/admin/edit-booking/${id}`,
        updatedData
      );
      toast.success(res.data.message || "Booking edited successfully");

      // Refresh bookings after edit
      await useAdminStore.getState().fetchPendingBookings();
      await useAdminStore.getState().fetchApprovedBookings();
    } catch (error) {
      console.error("Failed to edit booking:", error);
      toast.error(error.response?.data?.message || "Failed to edit booking");
    }
  },
}));
