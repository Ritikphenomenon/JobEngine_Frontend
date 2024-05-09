import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";



const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
    {
      id: 9,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
  ];
  
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gray-100">
      <div className="container flex flex-col justify-center bg-white p-8 gap-6 md:p-20 md:gap-10">
        <h3 className="text-xl font-bold">POPULAR CATEGORIES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((element) => {
            return (
              <div key={element.id} className="bg-f1f3f6 rounded-md p-4 flex gap-2 items-center hover:shadow-md transition duration-300">
                <div className="bg-green-700 rounded-full p-2 text-white">
                  {element.icon}
                </div>
                <div>
                  <p className="text-base font-semibold">{element.title}</p>
                  <p className="text-sm text-gray-500">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
