import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "NetFlix",
      location: "Sector-25 Noida, India",
      openPositions: 100,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Sector-25 Noida, India",
      openPositions: 500,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Facebbok",
      location: "Sector-25 Noida, India",
      openPositions: 200,
      icon: <FaApple />,
    },
  ];

  return (
    <div className="companies bg-f1f3f6 py-20">
      <div className="container min-w-1500 max-w-1500 flex flex-col items-center gap-35">
        <h3>TOP COMPANIES</h3>
        <div className="banner flex flex-wrap justify-between gap-6 md:gap-10">
          {companies.map((element) => (
            <div className="card bg-white w-full md:w-96 rounded-md p-4 flex flex-col justify-between hover:shadow-md transition duration-300" key={element.id}>
              <div className="content flex items-center gap-4">
                <div className="icon bg-green-700 rounded-full p-2 text-white">
                  {element.icon}
                </div>
                <div className="text">
                  <p className="font-semibold">{element.title}</p>
                  <p className="text-sm text-gray-500">{element.location}</p>
                </div>
              </div>
              <button className="text-center bg-gray-600 text-white font-bold rounded-md py-2">
                Open Positions {element.openPositions}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
