/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FileUpload } from "@/components/ui/FileUpload/file-upload";
import { useUploadImage } from "@/hooks/product.hook";
import { Input } from "@nextui-org/react";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { mutate: handleImageUpload, data: productImage } = useUploadImage();
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    productImage: "",
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
  });

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!productImage) {
      toast.error("Image is required", {
        position: "top-center",
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        productImage: productImage as string,
      }));
    }

    console.log(formData)
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
          <Input
            type="text"
            variant="underlined"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-primary hover:bg-primary-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
