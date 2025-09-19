"use client";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@heroui/react";

const RecomendedProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="px-2 md:px-6 max-w-7xl mx-auto ">
      <h1 className="text-lg md:text-3xl my-4 md:my-10">Recomended Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center gap-2 md:gap-4  justify-center">
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

export default RecomendedProducts;
