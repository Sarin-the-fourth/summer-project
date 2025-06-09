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
    <div className="flex min-h-screen items-center justify-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleFormData}
        />
        password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleFormData}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AdminLogin;
