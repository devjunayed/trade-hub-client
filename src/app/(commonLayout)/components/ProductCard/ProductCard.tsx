"use client"
import { TProduct } from "@/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { IconCoinTaka, IconCurrencyTaka } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({product}: {product: TProduct}) => {
  const [currentImage, setCurrentImage] = useState(product.productImages[0]);
  return (
    <Link key={product.name} href={`/products/${product._id}`}>
    <Card
      
      isPressable
      shadow="sm"
      className="w-full"
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
        onMouseOver={() => setCurrentImage(product.productImages[1] || product.productImages[0])}
        onMouseLeave={() => setCurrentImage(product.productImages[0])}
      />
    </CardBody>
      <CardFooter className="text-small flex items-center justify-between">
        <b className="text-left">{product.name}</b>
        <p className="text-default-500 flex gap-1 items-center"><IconCurrencyTaka size={18} />{product.price}  </p>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default ProductCard;
