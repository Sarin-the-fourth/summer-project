import { toast } from "react-toastify";
import { create } from "zustand";
import { axiosInstance } from "../assets/axios";

const getInitialAuthState = () => {
  const storedAdmin = localStorage.getItem("admin");
  const storedLogin = localStorage.getItem("isLoggedIn");
  return {
    admin: storedAdmin ? JSON.parse(storedAdmin) : null,
    isLoggedIn: storedLogin === "true",
  };
};

export const useAuthStore = create((set) => ({
  ...getInitialAuthState(),
  loadingLogin: false,
  login: async (formData) => {
    try {
      set({ loadingLogin: true });
      const res = await axiosInstance.post("/auth/admin/sign_in", formData);
      set({ admin: res.data.admin, isLoggedIn: true });
      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successfully");
      return true;
    } catch (error) {
      console.log("Err in login: ", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login"
      );
      return false;
    } finally {
      set({ loadingLogin: false });
    }
  },
}));

// formdata: {
// email: "",
// password: ""
// }
