// useSignUp.js
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "../app/context/authContext";

interface DataObj {
  userId: string;
  token: string;
}

interface SignUpResponse {
  status: number;
  userId: string;
  token: string;
  data: DataObj;
}

export const useSignUp = () => {
//   const apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
  const apiURL = "https://career-coach-ai.onrender.com/api/v1/user"

  const {contextSignUp} = useAuthContext();

  const [signUpSuccess, setSignUpSuccess] = useState<boolean | null>(null);
  const [signUpLoading, setSignUpLoading] = useState<boolean>(false);

  const signUp = async (email: string, password: string) => {
    try {
      setSignUpLoading(true);

      const response = await axios.post<SignUpResponse>(
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
        console.log(response)
        setSignUpSuccess(true);
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
        
        contextSignUp(response?.data.data.userId, response?.data.data.token)
      }
    } catch (error) {
      console.log(error)
      setSignUpSuccess(false);
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
      setSignUpLoading(false);
    }
  };

  return { signUpSuccess, signUpLoading, signUp };
};
