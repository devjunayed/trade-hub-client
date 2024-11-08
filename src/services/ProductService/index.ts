/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const uploadImageToImgBB = async (formData: any) => {
 

  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const response = await axiosInstance.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data.data.url as string;
};
