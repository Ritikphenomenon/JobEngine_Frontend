import { useContext } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {

  const { isAuthorized, setIsAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Navigate to the home page (you can replace '/' with the actual path to your home page)
      toast.success("Logout successfully");
      setIsAuthorized(false);
      navigateTo("/login");
  };

  if (!isAuthorized) {
    return ; // If not authorized, don't render anything
  }

  return (
    <nav className="bg-blue-800 px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center">
        <img src="/Jobengine.png" alt="logo" className="h-10 w-auto mr-4" />
        <h3 className="text-white text-lg font-semibold">JOBENGINE</h3>
      </div>
      <ul className="flex space-x-4 text-white font-medium">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/job/getall">ALL JOBS</Link>
        </li>
        <li>
          <Link to={user && user.role === "Employer" ? "/applications/me" : "/applications/me"}>
            {user && user.role === "Employer" ? "APPLICANT'S APPLICATIONS" : "MY APPLICATIONS"}
          </Link>
        </li>
        {user && user.role === "Employer" && (
          <>
            <li>
              <Link to="/job/post">POST NEW JOB</Link>
            </li>
            <li>
              <Link to="/job/me">VIEW YOUR JOBS</Link>
            </li>
          </>
        )}
        <li>
          <button onClick={handleLogout} className="bg-transparent  text-white  rounded font-semibold transition duration-300">
            LOGOUT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
