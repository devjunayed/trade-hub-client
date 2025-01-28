"use client";
import { useCreateCategory } from "@/hooks/category.hook";
import { Input } from "@heroui/react";
import { useState, FormEvent } from "react";
import { CircleLoader } from "react-spinners";

const AddCategory = () => {
  const { mutate: handleCreateCategory, isPending } = useCreateCategory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCreateCategory(formData);
  };

  return (
    <div className=" w-full flex items-center justify-center bg-gray-100">
      <div className="py-6 w-full max-w-lg  rounded-lg overflow-hidden">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Add a Category
        </h1>
        <form
          className="px-6 h-full flex items-center justify-center flex-col w overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 w-[80vw] max-w-full">
            <Input
              type="text"
              variant="underlined"
              label="Title"
              name="title"
              value={formData.title}
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
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="mt-4 disabled:bg-gray-400 w-full py-2 text-center bg-[#262626] hover:bg-[#262626] flex justify-center text-white rounded-lg"
          >
            {isPending ? (
              <CircleLoader size={24} color="white" />
            ) : (
              "Create Category"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
