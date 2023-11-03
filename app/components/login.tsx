"use client";

import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from 'flowbite-react';

import Logo from "@/public/assets/logo.svg";
import { Button, Input, Typography } from '@/ui';


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
      {/* <Logo/> */}
      <ToastContainer />
      <Typography
        variant='h1'
        fontWeight='bold'
        align='center'
      >
        Login Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          label='Email Address'
          type='email'
          value={email}
          id="email"
          onChange={(value) => setEmail(value)}
        />
        <Input
          label='Password'
          type='password'
          value={password}
          id="password"
          onChange={(value) => setPassword(value)}
        />
        
        <Button
          variant='default'
          label = {isLoading ? <Spinner size="md"/> : "Sign In" }
          disabled = {isLoading}
          type='submit'
        />
      </form>
    </div>
  );
};

export default Login;
