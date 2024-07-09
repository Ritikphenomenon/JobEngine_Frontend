import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  const token=localStorage.getItem('token');

  useEffect(() => {
    try {
      
      if (user && user.role === "Employer") {
        axios
          .get(`${import.meta.env.VITE_API_URL}api/v1/application/employer/getall`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get(`${import.meta.env.VITE_API_URL}api/v1/application/jobseeker/getall`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`${import.meta.env.VITE_API_URL}api/v1/application/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-gray-200 py-12">
  {user && user.role === "Job Seeker" ? (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">My Applications</h1>
      {applications.length <= 0 ? (
        <h4 className="text-xl text-gray-500">No Applications Found</h4>
      ) : (
        <ul className="list-disc space-y-8">
          {applications.map((element) => (
            <li key={element._id} className="p-4 border border-gray-300 rounded-md">
              <JobSeekerCard
                element={element}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Applications From Job Seekers</h1>
      {applications.length <= 0 ? (
        <h4 className="text-xl text-gray-500">No Applications Found</h4>
      ) : (
        <ul className="list-disc space-y-8">
          {applications.map((element) => (
            <li key={element._id} className="p-4 border border-gray-300 rounded-md">
              <EmployerCard element={element} openModal={openModal} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )}
  {modalOpen && (
    <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
  )}
</section>

  
  );
};

export default MyApplications;


const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <li className="flex flex-col items-center border-b border-gray-200 py-4">
      <div className="flex-grow space-y-2">
        <p className="text-base font-medium">
          <span className="text-gray-500">Name:</span> {element.name}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Email:</span> {element.email}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Phone:</span> {element.phone}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Address:</span> {element.address}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="mt-4">
        <img
          src={element.resume.url}
          alt="resume"
          className="w-full h-64 object-cover rounded-lg mb-4"
          onClick={() => openModal(element.resume.url)}
        />
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => deleteApplication(element._id)}
        >
          Delete Application
        </button>
      </div>
    </li>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <li className="flex flex-col items-center border-b border-gray-200 py-4">
      <div className="flex-grow space-y-2">
        <p className="text-base font-medium">
          <span className="text-gray-500">Name:</span> {element.name}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Email:</span> {element.email}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Phone:</span> {element.phone}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">Address:</span> {element.address}
        </p>
        <p className="text-base font-medium">
          <span className="text-gray-500">CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="mt-4">
        <img
          src={element.resume.url}
          alt="resume"
          className="w-full h-64 object-cover rounded-lg mb-4"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
    </li>
  );
};

