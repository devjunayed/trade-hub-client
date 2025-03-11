/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllOrders = async () => {
 
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/orders`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();

    if(data.success){
      return data
    }

    
    return {data: []};

};
