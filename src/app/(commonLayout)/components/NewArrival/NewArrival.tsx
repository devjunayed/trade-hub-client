"use client";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@heroui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const NewArrival = ({ products }: { products: TProduct[] }) => {
  const [sliced, setSliced] = useState(6);

  return (
    <div className="px-6 w-full">
      <h1 className="text-3xl my-10">New Arrival</h1>
      <div className="grid grid-cols-6 items-center gap-10  justify-center">
        {products?.slice(0, sliced).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <div className="w-full my-10 flex justify-center items-center">
        <Button
          onPress={() => setSliced(() => sliced === 6 ? 10 : 6)}
          className="bg-[#262626]  text-white mx-auto text-center"
        >
          {sliced === 6 ? (
            <>
              <BsEye /> See more
            </>
          ) : (
            <>
              <BsEyeSlash /> Hide More{" "}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NewArrival;
