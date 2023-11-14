"use client";

import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from 'flowbite-react';

import { Button, Input, Typography } from '@/ui';


interface LoginProps {
  isLoading: boolean;
  login: (email:string, password:string) => void;
}

const Login = ({ isLoading, login}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [preLoading, setPreLoading] =  useState(isLoading)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(validate()){
      setPreLoading(true)
      login(email, password); // Call the login function from the hook
    }
    // setPreLoading(false)
    
  };


  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      setPreLoading(false)
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
      setPreLoading(false)
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
    <div className="w-1/2 flex flex-col justify-center items-center mbl:w-full">
      <ToastContainer />
      <form onSubmit={handleSubmit} className='mt-8 w-[80%] mbl:w-full'>
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
          customClassname='w-full'
          variant='default'
          label = {preLoading ? <Spinner size="md"/> : "Sign In" }
          disabled = {preLoading}
          type='submit'
        />
      </form>
    </div>
  );
};

export default Login;
