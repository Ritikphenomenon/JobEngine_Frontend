import  { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const token=localStorage.getItem('token');

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}api/v1/job/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
   return navigateTo("/login");
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-4">Job Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-2">Title:</p>
          <p className="font-medium">{job.title}</p>
          <p className="text-gray-700 mb-2">Category:</p>
          <p className="font-medium">{job.category}</p>
          <p className="text-gray-700 mb-2">Country:</p>
          <p className="font-medium">{job.country}</p>
          <p className="text-gray-700 mb-2">City:</p>
          <p className="font-medium">{job.city}</p>
          <p className="text-gray-700 mb-2">Location:</p>
          <p className="font-medium">{job.location}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-2">Description:</p>
          <p className="font-medium">{job.description}</p>
          <p className="text-gray-700 mb-2">Job Posted On:</p>
          <p className="font-medium">{job.jobPostedOn}</p>
          <p className="text-gray-700 mb-2">Salary:</p>
          <p className="font-medium">
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>{job.salaryFrom} - {job.salaryTo}</span>
            )}
          </p>
          {user && user.role === "Employer" ? (
            <>
              {/* No action for employers */}
            </>
          ) : (
            <Link
            to={`/application/${job._id}`}
            className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-300 ease-in-out"
          >
            Apply Now
          </Link>
          
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
