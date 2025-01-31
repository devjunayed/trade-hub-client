/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getProducts = async (
  search: string = "",
  page: number = 1,
  sort: string = "-createdAt",
  filter: string = "",
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?searchTerm=${search}&page=${page}&sort=${sort}&category=${filter}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
