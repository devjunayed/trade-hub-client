import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SingleProductCard from "../components/SingleProductCard";
import { getSingleProducts } from "@/actions/getSingleProducts";

const SingleProduct = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const product = await getSingleProducts(productId as string);
  console.log(product);
  return (
    <div className="px-6 w-full">
      <BreadCrumb
        activePath={`${productId}`}
        labels={["products", `${productId}`]}
      />
      {product.length > 0 ? (
        <SingleProductCard product={product[0]} />
      ) : (
        <div className="w-full min-h-[50vh] flex justify-center items-center text-red-500 text-xl">
          Could not fetch the data
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
