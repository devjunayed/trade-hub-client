"use client";
import { useGetSingleCategory, useUpdateCategory } from "@/hooks/category.hook";
import { Button, Input } from "@nextui-org/react";
import { useState, FormEvent, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CircleLoader } from "react-spinners";

const AddCategory = ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  const { data } = useGetSingleCategory(categoryId);

  const { mutate: handleUpdateCategory, isPending } = useUpdateCategory();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setFormData({
      title: data?.data[0]?.title || "",
      description: data?.data[0]?.description || "",
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleUpdateCategory({ categoryId, categoryData: {...formData} });
  };

  return (
    <>
      <div className="m-8">
        <Button
          onClick={() => window.history.back()}
          className="bg-primary text-white text-xl"
        >
          <BsArrowLeft />
        </Button>
      </div>

      <div className=" w-full  flex items-center justify-center bg-gray-100">
        <div className="py-6 w-full max-w-lg  rounded-lg overflow-hidden">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Edit Category
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
              className="mt-4 disabled:bg-gray-400 w-full py-2 text-center bg-primary hover:bg-primary-500 flex justify-center text-white rounded-lg"
            >
              {isPending ? <CircleLoader size={24} color="white" /> : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
