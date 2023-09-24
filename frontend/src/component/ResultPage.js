import React from "react";
import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully</h2>
      <p className="mb-4 text-gray-700">
        Congratulations! Your form has been submitted successfully.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default ResultPage;
