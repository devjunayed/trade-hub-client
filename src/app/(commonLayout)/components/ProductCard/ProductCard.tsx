"use client";
import { TProduct } from "@/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { IconCoinTaka, IconCurrencyTaka } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { BiCart } from "react-icons/bi";

const ProductCard = ({
  product,
  height,
  isAddCartEnable,
}: {
  product: TProduct;
  height?: string;
  isAddCartEnable?: boolean;
}) => {
  const [currentImage, setCurrentImage] = useState(product.productImages[0]);
  return (
    <Link key={product.name} href={`/products/${product._id}`}>
      <Card
        isPressable
        shadow="sm"
        style={{ minHeight: height ? `${height}px` : "300px" }}
         className="w-full group "
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={product.name}
            className="w-full  h-7/12"
            radius="lg"
            isZoomed
            shadow="sm"
            src={currentImage}
            onMouseOver={() =>
              setCurrentImage(
                product.productImages[1] || product.productImages[0]
              )
            }
            onMouseLeave={() => setCurrentImage(product.productImages[0])}
          />
        </CardBody>
        <CardFooter className="text-small flex-grow flex flex-col items-center justify-between">
          <b className="text-left">{product.name}</b>
          <p className="text-default-500  justify-end flex gap-1 items-center">
            <IconCurrencyTaka size={18} />
            {product.price}{" "}
          </p>
          {isAddCartEnable && (
            <Button className="bg-[#262626] flex items-center justify-center h-full group-hover:opacity-100 opacity-0 py-2 text-white mt-4">
              <BiCart size={24} /> Add to cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
