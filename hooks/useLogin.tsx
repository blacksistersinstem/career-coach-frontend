import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "../app/context/authContext";

interface DataObj {
  userId: string;
  token: string;
}

interface LoginResponse {
  status: number;
  userId: string;
  token: string;
  data: DataObj;
}

export const useLogin = () => {
  const apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
  const { contextLogin } = useAuthContext();

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      console.log(".....Response.....");
      setIsLoading(true);

      const response = await axios.post<LoginResponse>(
        `https://career-coach-ai.onrender.com/api/v1/user/sign-in`,
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

      console.log("Response.....", response);

      if (response.status === 200) {
        setIsSuccess(true);
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
        // console.log(response.data.data.userId)
        contextLogin(response.data.data.userId, response.data.data.token);
      }
    } catch (error: any) {
      console.log(error?.message);
      setIsSuccess(false);
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
    } finally {
      setIsLoading(false);
    }
  };

  return { isSuccess, isLoading, login };
};
