"use client";
import { Input } from "@nextui-org/react";
import { useState, FormEvent } from "react";

const AddCategory = () => {
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
  };

  return (
    <div className="h-screen w-full flex items-center justify-center p-4 bg-gray-100">
      <div className="h-4/5 w-full max-w-lg  rounded-lg shadow-2xl overflow-hidden">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-4">
          Add a Category
        </h1>
        <form
          className="px-6 h-full flex items-center justify-center flex-col w overflow-y-auto"
          style={{ maxHeight: "calc(100% - 80px)" }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 w-[80vw] max-w-full">
            <Input
              type="text"
              variant="underlined"
              label="Name"
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

export default AddCategory;
