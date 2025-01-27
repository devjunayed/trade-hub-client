"use client"
import { TProduct } from "@/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

const ProductCard = ({product}: {product: TProduct}) => {
  return (
    <Card
      key={product.name}
      isPressable
      shadow="sm"
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={product.name}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={product.productImage}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{product.name}</b>
        <p className="text-default-500">{product.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
