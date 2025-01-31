"use client";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@heroui/react";

const FeaturedProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="px-6 w-full">
      <h1 className="text-3xl my-10">Featured Products</h1>
      <div className="grid grid-cols-6 items-center gap-10  justify-center">
        {products?.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <div className="w-full my-10 flex justify-center items-center">
        <Link href={"/products"}>
          <Button className="bg-[#262626] text-white mx-auto text-center">
            <BsEye /> Browse All Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
