import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useAdminStore = create((set) => ({
  loadingAddTour: false,

  addTour: async (data) => {
    try {
      set({ loadingAddTour: true });
      const res = await axiosInstance.post("/admin/add-tour", data);

      toast.success(res.data.message);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ loadingAddTour: false });
    }
  },
}));
