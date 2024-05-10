import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "4,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "3,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      <div className="flex flex-col py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="title flex flex-col justify-center max-w-xl">
            <h1>Ignite Your Career</h1>
            <h2>Find Your Dream Job Here</h2>
            <p className="mt-6">
              Tired of job searches that go nowhere? Let us help you land the
              perfect job that matches your skills and aspirations.
            </p>
          </div>
         
        </div>
        <div className="details flex flex-wrap justify-between gap-4 p-5 md:px-0">
  {details.map((element) => (
    <div className="card flex items-center bg-gray-100 w-72 md:w-auto p-5" key={element.id}>
      <div className="icon bg-blue-100 flex items-center justify-center rounded-full w-36 h-12">
        {element.icon}
      </div>
      <div className="content ml-4">
        <p className="font-semibold">{element.title}</p>
        <p className="text-sm text-gray-500">{element.subTitle}</p>
      </div>
    </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
