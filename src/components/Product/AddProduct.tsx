/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FileUpload } from "@/components/ui/FileUpload/file-upload";
import { useGetAllCategory } from "@/hooks/category.hook";
import { useCreateProduct, useUploadImage } from "@/hooks/product.hook";
import { TCategoryData } from "@/types";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useState, FormEvent, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    mutate: handleImageUpload,
    data: productImage,
    isSuccess: isImageUploadSuccess,
  } = useUploadImage();

  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();

  const { mutate: handleCreateProduct, isPending } = useCreateProduct();

  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    productImage: "",
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
  });

  useEffect(() => {
    setFormData({ ...formData, productImage: productImage as string });
  }, [productImage, isImageUploadSuccess]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    const formData = new FormData();
    formData.append("image", files[0]);
    handleImageUpload(formData);
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
    if (!productImage || productImage === "") {
      toast.error("Image is required", {
        position: "top-center",
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        productImage: productImage as string,
      }));
    }

    handleCreateProduct({
      productImage: formData.productImage,
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      stockQuantity: Number(formData.stockQuantity),
      category: formData.category,
    });
  };

  return (
    <div className="w-full max-w-lg  rounded-lg ">
      <h1 className="text-2xl font-semibold text-center text-gray-800 my-4">
        Add a Product
      </h1>
      <form
        className="p-6 h-[60vh] flex items-center justify-center flex-col overflow-y-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 mt-36">
          <FileUpload onChange={handleFileUpload} />
        </div>
        <div className="flex flex-col gap-4 w-[80vw] max-w-full">
          <Input
            type="text"
            variant="underlined"
            label="Name"
            name="name"
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
          className="w-full flex justify-center py-2 mt-6 disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
        >
          {isPending ? <CircleLoader size={24} color="white" /> : "Add product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
