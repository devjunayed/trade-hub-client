import { registerUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUserRegistration = () => {
  return useMutation<unknown, Error, unknown>({
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
