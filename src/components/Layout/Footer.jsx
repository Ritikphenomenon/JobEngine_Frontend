import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  if(!isAuthorized)
    return ;

  return (
    <footer
      className={`${
        isAuthorized ? "footerShow" : "footerHide"
      } bg-blue-700 flex justify-between items-center h-15 text-gray-300 fixed bottom-0 w-full z-50`}
      style={{ paddingBottom: isAuthorized ? "0" : "15px" }} // Adjust paddingBottom based on footer visibility
    >
      <div className="text-gray-300 text-center mx-auto">&copy; All Rights Reserved By CodeWithRitik.</div>
      <div className="flex gap-4">
        <Link to="https://www.facebook.com/Naukri" target="_blank">
          <FaFacebookF className="text-white" />
        </Link>
        <Link to="https://www.youtube.com/channel/UCxM0V90bml6_F7BMAqO9TrQ" target="_blank">
          <FaYoutube className="text-white" />
        </Link>
        <Link to="https://www.linkedin.com/company/naukri.com/?originalSubdomain=in" target="_blank">
          <FaLinkedin className="text-white" />
        </Link>
        <Link to="https://www.instagram.com/naukridotcom/?hl=en" target="_blank">
          <RiInstagramFill className="text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
