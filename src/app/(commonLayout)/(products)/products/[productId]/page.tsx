import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SingleProductCard from "../components/SingleProductCard";
import { getSingleProducts } from "@/actions/getSingleProducts";
import { TProduct } from "@/types";
import RecomendedProducts from "@/app/(commonLayout)/components/RecomendedProducts/RecomendedProducts";
import { getProducts } from "@/actions/getProducts";

const SingleProduct = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const product: TProduct[] = await getSingleProducts(productId as string);
  const products: {data: TProduct[]} = await getProducts();
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <BreadCrumb
        activePath={`${productId}`}
        labels={["products", `${productId}`]}
      />
      {product?.length > 0 ? (
        <SingleProductCard product={product[0]} />
      ) : (
        <div className="w-full min-h-[50vh] flex justify-center items-center text-red-500 text-xl">
          Could not fetch the data
        </div>
      )}
      {products && products?.data.length > 0 && products?.data && (
        <RecomendedProducts products={products.data} />
      )}
    </div>
  );
};

export default SingleProduct;
