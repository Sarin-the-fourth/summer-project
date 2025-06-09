import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

export const useAuthStore = create((set) => ({
  admin: null,
  loadingLogin: false,

  login: async (formData) => {
    try {
      set({ loadingLogin: true });
      const res = await axiosInstance.post("/auth/admin/sign_in", formData);
      set({ admin: res.data.admin });
      toast.success("Login Successfully");
    } catch (error) {
      console.log("Err in login: ", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login"
      );
    } finally {
      set({ loadingLogin: false });
    }
  },
}));

// formdata: {
// email: "",
// password: ""
// }
