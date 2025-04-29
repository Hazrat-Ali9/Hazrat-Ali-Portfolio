import React from "react";

const EducationLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white pt-20">
      <div className="flex items-center space-x-4">
        {/* Loading Icon */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        {/* Loading Text */}
        <p className="text-lg font-semibold">New education is loading...</p>
      </div>

      {/* Future Content Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">Stay tuned!</p>
      </div>
    </div>
  );
};

export default EducationLoader;
