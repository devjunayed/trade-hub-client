/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser, registerUser } from "@/services/AuthService";
import { TLoginResponse, TRegisterResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";


import { toast } from "react-toastify";



export const useUserRegistration = () => {
  return useMutation<TRegisterResponse, Error, unknown>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful", {
        position: 'top-center'
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center"
      });
    },
  });
};

export const useUserLogin = () => {
  return useMutation<TLoginResponse, Error, unknown>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User logged in successfully", {
        position: 'top-center'
      });
      
    
     
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center"
      });
    },
  });
};
