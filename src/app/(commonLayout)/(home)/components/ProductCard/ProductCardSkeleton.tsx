"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Skeleton } from "@heroui/react";

const ProductCardSkeleton = ({ height = "350px" }: { height?: string }) => {
  return (
    <Card
      shadow="sm"
      className="w-full flex flex-col overflow-hidden"
      style={{ height }}
    >
      {/* Image Skeleton */}
      <CardBody className="relative w-full h-[60%] p-0 overflow-hidden">
        <Skeleton className="w-full h-full rounded-lg" />
      </CardBody>

      {/* Text & Button Skeleton */}
      <CardFooter className="h-[40%] flex flex-col  justify-between p-4">
        <Skeleton className="h-4 w-full " />
        <div className="flex justify-start w-full ">
          <Skeleton className="h-4 w-9/12 mb-4" /> {/* title */}
        </div>
        <div className="flex h-4 w-full mb-1 justify-end items-end">
          <Skeleton className=" w-1/3 h-full" /> {/* price */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
