import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800">User: <span className="text-blue-600"> {userId} </span></h1>
      </div>
    </div>
  );
};

export default User;
