import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/services/CategoryService";
import { TCategoryData } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, TCategoryData>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (categoryData) => await createCategory(categoryData),
    onSuccess: () => {
      toast.success("Category created successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CATEGORY"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<
    unknown,
    Error,
    { categoryId: string; categoryData: TCategoryData }
  >({
    mutationKey: ["UPDATE_CATEGORY"],
    mutationFn: async ({ categoryId, categoryData }) =>
      await updateCategory(categoryId, categoryData),
    onSuccess: () => {
      toast.success("Category updated successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CATEGORY"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["DELETE_CATEGORY"],
    mutationFn: async (categoryId) =>
      await deleteCategory(categoryId as string),
    onSuccess: () => {
      toast.success("Category deleted successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_CATEGORY"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};

export const useGetALLCategory = () => {
  return useQuery<unknown, Error, { data: TCategoryData[] }>({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: async () => await getCategories(),
    staleTime: 0,
  });
};
