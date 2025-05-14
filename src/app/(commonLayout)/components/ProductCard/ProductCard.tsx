"use client";
import { TProduct } from "@/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/react";
import { IconCurrencyTaka } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCart } from "react-icons/bi";

const ProductCard = ({
  product,
  height = "350px",
  isAddCartEnable,
}: {
  product: TProduct;
  height?: string;
  isAddCartEnable?: boolean;
}) => {
  const [currentImage, setCurrentImage] = useState(product.productImages[0]);

  return (
    <Link key={product.name} passHref href={`/products/${product._id}`}>
      <Card
        shadow="sm"
        className="w-full group flex flex-col overflow-hidden"
        style={{ height }}
      >
        <CardBody className="relative w-full h-[60%] p-0 overflow-hidden">
          <Image
            priority
            loading="eager"
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover border rounded-lg overflow-hidden w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            onMouseOver={() =>
              setCurrentImage(
                product.productImages[1] || product.productImages[0]
              )
            }
            onMouseLeave={() => setCurrentImage(product.productImages[0])}
          />
        </CardBody>

        <CardFooter className="h-[40%] text-small flex flex-col items-center justify-between font-semibold p-4">
          <p className="text-left text-sm md:text-md w-full line-clamp-2">
            {product.name}
          </p>
          <p className="text-default-500 flex gap-1 items-center justify-end w-full">
            <IconCurrencyTaka size={18} />
            {product.price}
          </p>

          {isAddCartEnable && (
            <Button className="bg-[#262626] flex items-center justify-center h-full group-hover:opacity-100 opacity-0 py-2 text-white mt-2 transition-opacity duration-300 w-full">
              <BiCart size={20} className="mr-1" /> Add to cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
