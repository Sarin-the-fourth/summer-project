import { useState } from "react";
import { useAuthStore } from "../../Store/useAuthStore";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const success = await login(formData);
    if (success) {
      navigate("/admin");
    }
  };

  return (
    <section className="admin-login">
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative">
          <img
            src="/wtalogo1.ico"
            className="w-20 h-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <form
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 pt-14"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 flex justify-center">
                <h1 className="text-2xl font-montserrat font-bold">Login</h1>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="email"
                required
                className="input mb-5"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleFormData}
              />

              <input
                type="password"
                required
                className="input"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleFormData}
              />
            </div>

            <button
              type="submit"
              className="btn btn-neutral mt-4 hover:bg-[#fdb913] hover:text-[black]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
