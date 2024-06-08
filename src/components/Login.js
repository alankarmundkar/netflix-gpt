import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex-col relative h-full">
      <Header />
      <img className="absolute top-0 -z-10" src={BG_URL} alt="bg-pic"></img>
      <div className="bg-black text-white my-0 mx-auto max-w-md flex-col py-12 px-14 opacity-85">
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex-col">
          {!isSignInForm && (
            <input
              className="p-4 my-6 w-full bg-gray-800 "
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-4 my-6 w-full bg-gray-800 "
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 my-6 w-full bg-gray-800 "
            type="password"
            placeholder="Password"
          />
          <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Signup Now"
              : "Already registered? Signin Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
