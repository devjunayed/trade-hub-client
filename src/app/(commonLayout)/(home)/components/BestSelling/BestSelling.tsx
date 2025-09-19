"use client";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "@heroui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const BestSelling = ({ products }: { products: TProduct[] }) => {
  const [sliced, setSliced] = useState(6);

  return (
    <div className="px-2 md:px-6 max-w-7xl mx-auto">
      <h1 className="text-lg md:text-3xl my-4 md:my-10">Best Selling Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center gap-2 md:gap-4  justify-center">
        {products?.slice(0, sliced).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <div className="w-full gap-4 my-10 flex justify-center items-center">
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

export default BestSelling;
