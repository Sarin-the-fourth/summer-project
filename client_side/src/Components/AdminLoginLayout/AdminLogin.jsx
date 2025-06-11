import { useState } from "react";
import { useAuthStore } from "../../Store/useAuthStore";

const AdminLogin = () => {
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };

  return (
    <section className="admin-login">
      <div className="flex min-h-screen items-center justify-center">
        <fieldset
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          on
          onSubmit={handleSubmit}
        >
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your assword"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        ;
      </div>
    </section>
  );
};

export default AdminLogin;
