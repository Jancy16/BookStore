import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/"; // Navigate to the "from" path or homepage.

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('Sign-out successful!');
        navigate("/", { replace: true }); // Redirect to homepage after logout
      })
      .catch((error) => {
        alert(`Error signing out: ${error.message}`);
      });
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Are you sure you want to log out?
        </h2>
        <button
          className="bg-white text-gray-700 border-2 border-gray-500 hover:bg-gray-200 hover:border-gray-700 px-8 py-2 rounded transition duration-300 ease-in-out"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
