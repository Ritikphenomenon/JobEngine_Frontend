import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const[change,notchange]=useState("password");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/v1/user/register`,
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  if(isAuthorized){
    return <Navigate to={'/'}/>
  }


  return (
    <>
     <section className="flex min-h-screen min-w-screen bg-cover bg-no-repeat bg-center">
  {/* Left Side (Background) */}
  <div className="hidden md:block w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/login.jpg')` }}></div>

  {/* Right Side (Register Form) */}
  <div className="bg-white rounded-md shadow-md p-4 md:p-4 w-full md:w-1/2 lg:w-2/3 xl:w-1/2 mt-1">
    
        <div className="header flex flex-col items-center mb-4 md:mb-8">
          <img src="/Jobengine.png" alt="logo" className="w-20 h-15 md:w-30 md:h-20 mb-2 md:mb-4" />
          <h3 className="text-xl md:text-2xl">Create a new account</h3>
        </div>
        <form className="flex flex-col gap-2 md:gap-4">
          <div className="inputTag flex flex-col gap-2">
            <label>Register As</label>
            <div className="flex items-center rounded-md">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-gray-200 p-2 w-full rounded-md"
              >
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
            </div>
          </div>
          <div className="inputTag flex flex-col gap-2">
            <label>Name</label>
            <div className="flex items-center rounded-md">
              <input
                type="text"
                placeholder="Ritik"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 p-2 w-full rounded-md"
              />
              <FaPencilAlt className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
            </div>
          </div>
          <div className="inputTag flex flex-col gap-2">
            <label>Email Address</label>
            <div className="flex items-center rounded-md">
              <input
                type="email"
                placeholder="ritik@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 p-2 w-full rounded-md"
              />
              <MdOutlineMailOutline className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
            </div>
          </div>
          <div className="inputTag flex flex-col gap-2">
            <label>Phone Number</label>
            <div className="flex items-center rounded-md">
              <input
                type="number"
                placeholder="12345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-200 p-2 w-full rounded-md"
              />
              <FaPhoneFlip className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
            </div>
          </div>
          <div className="inputTag flex flex-col gap-2">
            <label>Password</label>
            <div className="flex items-center rounded-md">
              <input
                type={change}
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 p-2 w-full rounded-md"
              />
             
              <RiLock2Fill className="w-10 h-10 bg-green-700 p-2 text-white rounded-l-md" />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-green-700 text-white p-3 text-center font-bold rounded-md mt-2 md:mt-5 hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
          <Link
            to={"/login"}
            className="border border-green-700 p-3 text-center font-bold rounded-md mt-2 md:mt-5 hover:bg-green-100 transition duration-300"
          >
            Login Now
          </Link>
        </form>
      </div>
</section>
  </>
  
  );
};

export default Register;
