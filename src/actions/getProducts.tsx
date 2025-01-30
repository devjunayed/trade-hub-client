/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getProducts = async (search: string, page: number, sort: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?searchTerm=${search}&page=${page}&sort=${sort}`,
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
