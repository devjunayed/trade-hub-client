/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import FileUpload from "@/components/ui/FileUpload/file-upload";
import { useGetAllCategory } from "@/hooks/category.hook";
import {
  useCreateProduct,
  useGetSingleProduct,
  useUpdateProduct,
} from "@/hooks/product.hook";
import { TCategoryData } from "@/types";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useState, FormEvent, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CircleLoader } from "react-spinners";
import { toast } from "react-toastify";

const EditProduct = ({ params }: { params: { productId: string } }) => {
  const { data: productData, isPending: isProductDataPending } =
    useGetSingleProduct(params.productId as string);

  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();

  const { mutate: handleUpdateProduct, isPending } = useUpdateProduct();

  const [formData, setFormData] = useState({
    productImages: [] as string[],
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
  });

  useEffect(() => {
    setFormData({
      productImages: productData?.data[0]?.productImages || [],
      name: productData?.data[0]?.name || "",
      description: productData?.data[0]?.description || "",
      price: productData?.data[0]?.price?.toString() || "",
      stockQuantity: productData?.data[0]?.stockQuantity?.toString() || "",
      category: productData?.data[0]?.category._id || "",
    });
  }, [isProductDataPending, productData]);

  // getting image url exchange of file
  const handleFileUpload = (imageUrls: string[]) => {
    setFormData((prev) => ({
      ...prev,
      productImages: [...imageUrls],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelect = (eventOrValue: any) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setFormData({
      ...formData,
      category: categories?.data[Number(value)]._id || "",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.productImages.length <= 0) {
      toast.error("Image is required", {
        position: "top-center",
      });
    } else {
      handleUpdateProduct({
        productId: params.productId,
        productData: {
          productImages: [...formData.productImages],
          name: formData.name,
          description: formData.description,
          price: Number(formData.price),
          stockQuantity: Number(formData.stockQuantity),
          category: formData.category,
        },
      });
    }
  };

  return (
    <>
      <div className="w-full relative rounded-lg ">
        <div className="absolute flex items-center justify-center gap-2 left-4 top-4 ">
          <Button
            onPress={() => window.history.back()}
            className="bg-[#262626] text-white text-xl"
          >
            <BsArrowLeft />
          </Button>
          <h1 className="text-xl  font-semibold  text-gray-800 my-4">
            Edit Product
          </h1>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <form
            className="p-6  max-w-lg   h-[60vh] flex items-center justify-center flex-col overflow-y-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 mt-36">
              <FileUpload
                initialFileUrls={formData.productImages as []}
                handleFileUpload={handleFileUpload}
              />
            </div>
            <div className="flex flex-col gap-4 w-[80vw] max-w-full">
              <Input
                type="text"
                variant="underlined"
                label="Name"
                name="name"
                defaultValue={formData.name}
                value={formData.name}
                onChange={handleChange}
                className="w-full"
              />
              <Input
                type="text"
                variant="underlined"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full"
              />

              <Input
                type="number"
                variant="underlined"
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full"
              />
              <Input
                type="number"
                variant="underlined"
                label="Stock Quantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                className="w-full"
              />

              <Select
                variant="underlined"
                name="category"
                placeholder={productData?.data[0].category.title}
                label="Select a category"
                onChange={handleCategorySelect}
              >
                {categories &&
                categories.data.length > 0 &&
                !isGetCategoriesPending ? (
                  categories.data.map((category: TCategoryData, index) => (
                    <SelectItem key={index}>{category.title}</SelectItem>
                  ))
                ) : (
                  <SelectItem key={"no-categories"} isDisabled>
                    No categories available
                  </SelectItem>
                )}
              </Select>
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="w-full flex justify-center py-2 mt-6 disabled:bg-gray-400 bg-[#262626] text-white rounded-md hover:bg-primary-dark focus:outline-none"
            >
              {isPending ? <CircleLoader size={24} color="white" /> : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
