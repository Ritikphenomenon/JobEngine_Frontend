import { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}api/v1/user/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      const token = data.token;
      localStorage.setItem("token", token);
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (

      <section className="flex min-h-screen min-w-screen bg-cover bg-no-repeat bg-center">
        {/* Left Side (Background) */}
        <div className="hidden md:block w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/login.jpg')` }}></div>
    
        {/* Right Side (Login Form) */}
        <div className="flex justify-center items-center w-full md:w-1/2">

          <div className="bg-white rounded-md shadow-md w-full md:w-0.55 lg:w-0.99">

            <div className="header flex flex-col items-center mb-6">
              <img src="/Jobengine.png" alt="logo" className="w-42 h-20 mb-4" />
              <h3 className="text-2xl text-gray-800">Login to your account</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div className="inputTag flex flex-col gap-2">
                <label htmlFor="role" className="text-gray-800">
                  Login As
                </label>
                <div className="flex items-center rounded-md">
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-gray-200 p-2 w-full rounded-md text-gray-800"
                  >
                    <option value="">Select Role</option>
                    <option value="Employer">Employer</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                  <FaRegUser className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
                </div>
              </div>
              <div className="inputTag flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-800">
                  Email Address
                </label>
                <div className="flex items-center rounded-md">
                  <input
                    type="email"
                    id="email"
                    placeholder="ritik@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-200 p-2 w-full rounded-md text-gray-800"
                  />
                  <MdOutlineMailOutline className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
                </div>
              </div>
              <div className="inputTag flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-800">
                  Password
                </label>
                <div className="flex items-center rounded-md">
                  <input
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-200 p-2 w-full rounded-md text-gray-800"
                  />
                  <RiLock2Fill className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="bg-green-700 text-white p-3 text-center font-bold rounded-md hover:bg-green-600 transition duration-300"
              >
                Login
              </button>
              <Link
                to={"/register"}
                className="border border-green-700 p-3 text-center font-bold rounded-md mt-2 text-gray-800 hover:bg-green-100 transition duration-300"
              >
                Register Now
              </Link>
            </form>
          </div>
        </div>
      </section>
    );
    
};

export default Login;

          
