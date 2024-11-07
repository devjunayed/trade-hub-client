"use client";
import { FileUpload } from "@/components/ui/FileUpload/file-upload";
import { Input } from "@nextui-org/react";
import { useState, FormEvent } from "react";

const AddProduct = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
  });

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Files:", files);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center p-4 bg-gray-100">
      <div className="h-4/5 w-full max-w-lg  rounded-lg shadow-2xl overflow-hidden">
        <h1 className="text-2xl font-semibold text-center text-gray-800 my-4">Add a Product</h1>
        <form
          className="p-6 h-full flex items-center justify-center flex-col w overflow-y-auto"
          style={{ maxHeight: "calc(100% - 80px)" }}
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
    </div>
  );
};

export default AddProduct;
