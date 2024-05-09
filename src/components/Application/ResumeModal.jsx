const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-85 z-50">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white rounded-lg shadow-md px-4 py-4 relative w-3/4 max-w-md">
          <button type="button" className="absolute top-3 right-3.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClose}>
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.707 3.707a1 1 0 0 1 1.414 1.414L10 8.586l4.293-4.293a1 1 0 0 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 1.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <img src={imageUrl} alt="resume" className="mx-auto max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
