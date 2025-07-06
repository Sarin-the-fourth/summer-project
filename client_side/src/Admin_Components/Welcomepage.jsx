import { useEffect, useRef } from "react";
import { useAuthStore } from "../Store/useAuthStore";

const Welcomepage = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const admin = useAuthStore((state) => state.admin);

  useEffect(() => {
    if (!admin) {
      console.log("Running checkAuth...");
      checkAuth();
    }
  }, [admin]);

  return (
    <div className="bg-[#222831] shadow-2xl rounded border-0 w-full min-h-screen flex justify-center text-center items-center">
      <div className="font-oranienbaum uppercase text-[#dddd] text-8xl space-y-5">
        <p>Welcome</p>
        <p>{admin?.name}</p>
      </div>
    </div>
  );
};

export default Welcomepage;
