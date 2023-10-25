"use client";

import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


interface LoginProps {
  isLoading: boolean;
  login: (email:string, password:string) => void;
}

const Login = ({ isLoading, login}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validate()
    login(email, password); // Call the login function from the hook
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.error("Please, enter a proper email address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (password === "" || password === null) {
      result = false;
      toast.error("Please, enter a proper password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return result;
  };

  return (
    <div className="w-2/5">
      <ToastContainer />
      <h1 className="text-white text-2xl mb-4">Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="email" className="text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            name=""
            id="email"
            className="p-2 border border-blue-600 outline-1 outline-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="password" className="text-white mb-2">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            className="p-2 border border-blue-600 outline-1 outline-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          disabled = {isLoading}
          type="submit"
          className="w-full text-white bg-blue-600 p-4 rounded-sm hover:bg-blue-500"
        >
          {isLoading ? "...loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
