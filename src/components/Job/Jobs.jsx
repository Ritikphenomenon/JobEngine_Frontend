import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_API_URL}api/v1/job/getall`, {
         
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    return navigateTo("/login");
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ALL AVAILABLE JOBS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.jobs &&
          jobs.jobs.map((element) => (
            <div
              key={element._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start justify-between"
            >
              <Link
                to={`/job/${element._id}`}
                className="text-xl font-medium mb-2 text-blue-500 hover:text-blue-700 underline px-4 py-2 rounded-md bg-gray-200"
              >
                {element.title}
              </Link>
              <p className="text-gray-600 mb-1">{element.category}</p>
              <p className="text-gray-600 mb-4">{element.country}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Jobs;
