/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { ThrowError } from "@/utils/error";

export const uploadImage = async (image: any) => {
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      { method: "POST", body: image }
    );
    const data = await response.json();
    return data.data.display_url;
  } catch (error) {
    ThrowError(error);
  }
};
