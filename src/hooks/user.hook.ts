/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser, getAllUser } from "@/services/UserService";
import { TUser } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";

export const useCreateUser = () => {
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_USER"],
    mutationFn: async (userData) => await createUser(userData),
    onSuccess: () => {
      toast.success("User creation successful", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};
export const useGetAllUser = () => {
  return useQuery<TUser[], Error, TUser[]>({
    queryKey: ["GET_ALL_USER"],
    queryFn: async () => await getAllUser(),
  });
};

// export const useUserLogin = () => {
//   return useMutation<TLoginResponse, Error, unknown>({
//     mutationKey: ["USER_LOGIN"],
//     mutationFn: async (userData) => await loginUser(userData),
//     onSuccess: () => {
//       toast.success("User logged in successfully", {
//         position: 'top-center'
//       });

//     },
//     onError: (error) => {
//       toast.error(error.message, {
//         position: "top-center"
//       });
//     },
//   });
// };
