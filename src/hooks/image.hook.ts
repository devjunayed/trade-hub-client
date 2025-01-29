import { uploadImage } from "@/services/ManageImage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUploadImage = () => {
    return useMutation<unknown, Error, unknown>({
      mutationKey: ["UPLOAD_IMAGE"],
      mutationFn: async (image: unknown) => await uploadImage(image),
      onSuccess: (data) => {
        toast.success("Image uploaded successfully", {
          position: 'top-center'
        });
        return data;
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center"
        });
      },
    });
  };