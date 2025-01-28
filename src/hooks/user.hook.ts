/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser, deleteUser, editUser, getAllUser, getUser } from "@/services/UserService";
import { TUser } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
export const useEditUser = () => {
  return useMutation<unknown, Error, TUser>({
    mutationKey: ["EDIT_USER"],
    mutationFn: async (userData) => await editUser(userData),
    onSuccess: () => {
      toast.success("User updated successfully", {
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
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, string>({
    mutationKey: ["DELETE_USER"],
    mutationFn: async (userId: string) => await deleteUser(userId),
    onSuccess: () => {
      toast.success("User deleted successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_USER"] });
    },
    onError: (error) => {
      console.log(error)
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
export const useGetUser = (userId: string) => {
  return useQuery<TUser, Error, TUser>({
    queryKey: ["GET_USER"],
    queryFn: async () => await getUser(userId),
  });
};

