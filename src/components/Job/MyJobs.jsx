import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();
  //Fetching all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}api/v1/job/getmyjobs`,
          { withCredentials: true }
        );
        setMyJobs(data.myJobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);

  if (!isAuthorized || (user && user.role !== "Employer")) {
    return navigateTo("/");
  }

  //Function For Enabling Editing Mode
  const handleEnableEdit = (jobId) => {
    //Here We Are Giving Id in setEditingMode because We want to enable only that job whose ID has been send.
    setEditingMode(jobId);
  };

  //Function For Disabling Editing Mode
  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  //Function For Updating The Job
  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    await axios
      .put(`${import.meta.env.VITE_API_URL}api/v1/job/update/${jobId}`, updatedJob, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setEditingMode(null);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  //Function For Deleting Job
  const handleDeleteJob = async (jobId) => {
    await axios
      .delete(`${import.meta.env.VITE_API_URL}api/v1/job/delete/${jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };


  const handleInputChange = (jobId, field, value) => {
    // Update the job object in the jobs state with the new value
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  
  return (
    <>
      <div className="mx-10">
        <div className="grid grid-cols-1 gap-3">
          <h1 className="flex justify-center">Your Posted Jobs</h1>
          {myJobs.length > 0 ? (
            <>
              <div className="">
                {myJobs.map((element) => (
                  <>
                  <div className="flex flex-col space-y-4 p-4 border border-gray-200 rounded-md shadow-md bg-white" key={element._id}>
                    <div className="">
                      <div className="">
                        <div>
                          <span className="label">Title:</span>
                          <input
                            type="text"
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                            className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            value={element.title}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "title",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          {" "}
                          <span className="label">Country:</span>
                          <input
                          className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            type="text"
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                            value={element.country}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "country",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <span className="label">City:</span>
                          <input
                            type="text"
                            className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                            value={element.city}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "city",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <span className="label">Category:</span>
                          <select
                            value={element.category}
                            className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "category",
                                e.target.value
                              )
                            }
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                          >
                            <option value="Graphics & Design">
                              Graphics & Design
                            </option>
                            <option value="Mobile App Development">
                              Mobile App Development
                            </option>
                            <option value="Frontend Web Development">
                              Frontend Web Development
                            </option>
                            <option value="MERN Stack Development">
                              MERN STACK Development
                            </option>
                            <option value="Account & Finance">
                              Account & Finance
                            </option>
                            <option value="Artificial Intelligence">
                              Artificial Intelligence
                            </option>
                            <option value="Video Animation">
                              Video Animation
                            </option>
                            <option value="MEAN Stack Development">
                              MEAN STACK Development
                            </option>
                            <option value="MEVN Stack Development">
                              MEVN STACK Development
                            </option>
                            <option value="Data Entry Operator">
                              Data Entry Operator
                            </option>
                          </select>
                        </div>
                        <div>
                          <span>
                           <span className="label">
                           Salary:
                            </span> 
                            
                            {" "}
                            {element.fixedSalary ? (
                              <input
                                type="number"
                                className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                                disabled={
                                  editingMode !== element._id ? true : false
                                }
                                value={element.fixedSalary}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "fixedSalary",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              <div>
                                <input
                                  type="number"
                                  className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                                  disabled={
                                    editingMode !== element._id ? true : false
                                  }
                                  value={element.salaryFrom}
                                  onChange={(e) =>
                                    handleInputChange(
                                      element._id,
                                      "salaryFrom",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  type="number"
                                  className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                                  disabled={
                                    editingMode !== element._id ? true : false
                                  }
                                  value={element.salaryTo}
                                  onChange={(e) =>
                                    handleInputChange(
                                      element._id,
                                      "salaryTo",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            )}
                          </span>
                        </div>
                        <div>
                          {" "}
                          <span className="label">Expired:</span>
                          <select
                          className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            value={element.expired}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "expired",
                                e.target.value
                              )
                            }
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                          >
                            <option value={true}>TRUE</option>
                            <option value={false}>FALSE</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div>
                          <span className="label">Description:</span>{" "}
                          <textarea
                            rows={5}
                            className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            value={element.description}
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <span className="label">Location: </span>
                          <textarea
                            className="input  disabled:bg-slate-100 disabled:cursor-not-allowed"
                            value={element.location}
                            rows={5}
                            disabled={
                              editingMode !== element._id ? true : false
                            }
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "location",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {/* Out Of Content Class */}
                    <div className="">
                      <div className="space-x-3">
                        {editingMode === element._id ? (
                          <>
                            <button
                             className ='btn bg-green-400'
                              onClick={() => handleUpdateJob(element._id)}
                              
                            >
                              <FaCheck />
                            </button>
                            <button
                            
                              onClick={() => handleDisableEdit()}
                              className="btn bg-red-400"
                            >
                              <RxCross2 />
                            </button>
                          </>
                        ) : (

                          <div className="flex justify-center gap-3">
                          
                          <button
                            onClick={() => handleEnableEdit(element._id)}
                            className="py-4 px-8 bg-green-400 rounded-lg"
                          >
                            Edit
                          </button>


                            <button
                            onClick={() => handleDeleteJob(element._id)}
                            className="py-4 px-8 bg-red-400 rounded-lg"
                          >
                            Delete
                          </button>

                          </div>


                        )}
                      </div>
                    
                    </div>
                  </div>
                   <div className="h-3  w-full my-6"></div>
                   </>
                ))}
              </div>

             
            </>
          ) : 
          
          (
            <p>
              You have not posted any job or may be you deleted all of your jobs!
            </p>
          )}

          
        </div>
      </div>
    </>
  );
};

export default MyJobs;
