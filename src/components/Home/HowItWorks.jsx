import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";



const HowItWorks = () => {
  return (
    <section className="how-it-works bg-gradient-to-r from-sky-500 to-indigo-500 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-white font-semibold mb-12">How Jobsite Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white rounded-lg shadow-md flex flex-col items-center p-8">
            <FaUserPlus className="text-4xl text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Create Your Account</h3>
            <p className="text-base text-gray-600">
              Its simple and free to sign up as a Jobseeker or Employer. Join our growing community to unlock exciting opportunities.
            </p>
          </div>
          <div className="card bg-white rounded-lg shadow-md flex flex-col items-center p-8">
            <MdFindInPage className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Find a Job or Post One</h3>
            <p className="text-base text-gray-600">
              Jobseekers can browse thousands of relevant jobs, while Employers can post detailed job descriptions to attract top talent.
            </p>
          </div>
          <div className="card bg-white rounded-lg shadow-md flex flex-col items-center p-8">
            <IoMdSend className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Connect and Get Hired</h3>
            <p className="text-base text-gray-600">
              Jobseekers can showcase their skills and apply for jobs, while Employers can review applications and connect with qualified candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
