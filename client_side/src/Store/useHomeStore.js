import { create } from "zustand";
import { axiosInstance } from "../assets/axios";
import { toast } from "react-toastify";

export const useHomeStore = create((set) => ({
  homepage: null,

  fetchHomepage: async () => {
    try {
      const res = await axiosInstance.get("/user/homepage");
      set({ homepage: res.data });
      console.log("Fetched homepage:", res.data);
    } catch (error) {
      console.error("Failed to fetch homepage:", error);
      toast.error("Failed to fetch homepage");
      set({ homepage: null });
    }
  },
}));
