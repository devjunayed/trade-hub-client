/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
