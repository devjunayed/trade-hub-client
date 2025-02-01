/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getSingleProducts = async (
  productId: string
) => {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if(data.success){
      return data.data
    }

    
    return {data: []};
 
};
