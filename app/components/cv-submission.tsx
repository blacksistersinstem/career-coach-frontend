"use client";

import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

import { ArrowUpFromBracketOI } from "flowbite-react-icons";
import { Typography, Input, Button } from "@/ui";
import { gilroy } from "@/styles/font";

interface OutroProps {
  outroFxn: () => void;
}

const CVSubmission = ({ outroFxn }: OutroProps) => {
  const apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
  const { userId, token } = useAuthContext();

  const [response, setResponse] = useState<string | null>(null);
  const [currentJob, setCurrentJob] = useState<string>('');
  const [targetJob, setTargetJob] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(
    null
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target){
      const { name, value } = e.target;

      if (name === "currentRole") {
        setCurrentJob(value);
      } else if (name === "targetRole") {
        setTargetJob(value);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSelectedFile = e.target.files?.[0];
    setSelectedFile(newSelectedFile);
  };

  const submit = async () => {
    const formData = new FormData();

    if (selectedFile) {
      formData.append("resume", selectedFile);
    }
    formData.append("currentRole", currentJob);
    formData.append("targetRole", targetJob);

    if (currentJob === "" || currentJob === null) {
      toast.error("Please, enter a proper current job role", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (targetJob === "" || targetJob === null) {
      toast.error("Please, enter a proper target job role", {
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

    try {
      const response = await axios.post(
        `https://career-coach-ai.onrender.com/api/v1/ai/${userId}/prompt`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Form was successfully submitted", {
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
      setResponse(response.data.chat.response);
    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setResponse(null);
    }
  };

  const submitResume = (e: FormEvent) => {
    e.preventDefault();
    submit();
    setSubmitted(true);
  };

  return (
    <div>
      <ToastContainer />
      {!submitted ? (
        <div>
          <Button onClick={outroFxn} variant="error" label="Go Back" />

          <form className="w-full mt-10" onSubmit={submitResume}>
            <Typography
              variant="h1"
              align="left"
              font="gilroy"
              color="white"
              fontWeight="bold"
              customClassName="mb-4"
            >
              Tell us about yourself
            </Typography>
            <Input
              placeholder="Please input your current job role"
              value={currentJob}
              onChange={handleInputChange}
              type="text"
              name="currentRole"
            />
            <Input
              placeholder="Please input your target job role"
              value={targetJob}
              onChange={handleInputChange}
              type="text"
              name="targetRole"
            />
            <label
              htmlFor="resume"
              className="block cursor-pointer w-full h-auto"
            >
              <span
                className={`w-auto h-12 flex justify-center items-center  bg-secondary-5 text-white hover:bg-secondary-3 ${gilroy.className}`}
              >
                {selectedFile ? (
                  `${selectedFile?.name}`
                ) : (
                  <span className="flex gap-2">
                    <ArrowUpFromBracketOI /> Upload your resume{" "}
                  </span>
                )}
              </span>
              <input
                type="file"
                name="resume"
                id="resume"
                onChange={handleFileChange}
                accept=".pdf"
                className="hidden"
              />
            </label>

            <div className="flex justify-center items-center">
              <Button
                variant="default"
                label="Submit"
                customClassname="mt-4 w-[8rem]"
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Button
            variant="error"
            label = "Go Back"
            onClick = {() => setSubmitted(false)}
          />
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default CVSubmission;
