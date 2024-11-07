import { createCategory } from "@/services/CategoryService";
import { TCategoryData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateCategory = () => {
  return useMutation<unknown, Error, TCategoryData>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (categoryData) => await createCategory(categoryData),
    onSuccess: () => {
      toast.success("Category created successfully", {
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
