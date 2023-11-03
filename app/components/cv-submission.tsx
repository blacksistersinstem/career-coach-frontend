"use client";

import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

interface OutroProps {
  outroFxn: () => void;
}

const CVSubmission = ({ outroFxn }: OutroProps) => {
  const apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
  const { userId, token } = useAuthContext();

  const [response, setResponse] = useState<string | null>(null)
  const [currentJob, setCurrentJob] = useState<string>("");
  const [targetJob, setTargetJob] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(
    null
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "current") {
      setCurrentJob(value);
    } else if (name === "target") {
      setTargetJob(value);
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
      console.log("Response", response);
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
      setResponse(response.data.chat.response)
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
      setResponse(null)
    }
  };

  const submitResume = (e: FormEvent) => {
    e.preventDefault();
    submit();
    setSubmitted(true);
  };

  return (
    <div>
      <ToastContainer/>
      {!submitted ? (
        <div>
          <button
            className="bg-red-600 text-white font-bold p-2 rounded-sm mb-12"
            onClick={outroFxn}
          >
            Go Back
          </button>
          <h1 className="text-2xl font-bold mb-4">Tell us about yourself</h1>
          <form className="w-full" onSubmit={submitResume}>
            <input
              type="text"
              name="currentRole"
              id=""
              value={currentJob}
              onChange={handleInputChange}
              placeholder="Current Job Role"
              className="block w-full p-2 rounded mb-2"
            />
            <input
              type="text"
              name="targetRole"
              id=""
              value={targetJob}
              onChange={handleInputChange}
              placeholder="Target Job Role"
              className="block w-full p-2 rounded mb-2"
            />
            <input
              type="file"
              name="resume"
              id=""
              onChange={handleFileChange}
              accept=".pdf"
              className="block"
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-3/5 text-white bg-blue-600 my-8 p-2 rounded-sm hover:bg-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <button
            className="bg-red-600 text-white font-bold p-2 rounded-sm mb-12"
            onClick={() => setSubmitted(false)}
          >
            Go Back
          </button>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default CVSubmission;
