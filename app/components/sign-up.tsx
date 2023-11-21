"use client";

import React, { FormEvent, useState } from "react";

import { Button, Input, } from "@/ui";
import { Spinner } from "flowbite-react";

interface SignUpProps {
  signUpLoading: boolean;
  signUp: (email:string, password: string) => void;
}

const SignUp = ({signUpLoading, signUp}:SignUpProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passCheck, setPassCheck] = useState(false);

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);

    //Check to ensure the passwords are the same.
    if (password !== value) {
      setPassCheck(false);
    } else {
      setPassCheck(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    signUp(email, password);
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center mbl:w-full">
      <form onSubmit={handleSubmit} className="mt-8 w-[80%] mbl:w-full">
        <Input
          label="Email Address"
          type="email"
          value={email}
          id="email"
          onChange={(value) => setEmail(value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          id="password"
          onChange={(value) => setPassword(value)}
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          id="confirmPassword"
          onChange={(value) => handleConfirmPasswordChange(value)}
        />
        <Button
          variant={!passCheck ? "disabled" : "default"}
          type="submit"
          label={signUpLoading ? <Spinner size="md"/> : "Sign Up" }
          customClassname="w-full"
        />
      </form>
    </div>
  );
};

export default SignUp;
