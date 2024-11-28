import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        alert("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.AuthContext.errorCode;
        const errorMessage = error.message;
        setError(`Login Error: ${error.message}`);

        serError(errorMessage)
      });
  };

  const handleGoogleSignUp = () => {
    loginWithGoogle()
      .then(() => {
        alert("Signed in successfully with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(`Google Sign-In Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  />
                </div>
                <div className="relative">
                  <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  />
                </div>
                {error ? <p className= 'text-red-600 text-base'> Email or Password is not correct:</p>: ""}
                <p>
                  If you don't have an account, Please{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
                    Sign up
                  </Link>{" "}
                  Here
                </p>
                <div className="relative">
                  <button type="submit" className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Log In
                  </button>
                </div>
              </form>
            </div>

            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button
                onClick={handleGoogleSignUp}
                className="block flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-3"
              >
                <img src={googleLogo} alt="Google Logo" className="w-6 h-6 inline-block mr-3" />
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;