// useSignUp.js
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useSignUp = () => {
//   const apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
    const apiURL = "https://career-coach-ai.onrender.com/api/v1/user"

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${apiURL}/sign-up`,
        {
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setIsSuccess(true);
        toast.success("Sign-up successful! Please log in.", {
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
    } catch (error) {
      setIsSuccess(false);
      toast.error(`Sign-up failed. Please try again.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isSuccess, isLoading, signUp };
};
