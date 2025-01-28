/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCreateUser } from "@/hooks/user.hook";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { FormEvent, useState } from "react";
import { CircleLoader } from "react-spinners";


const CreateUser = () => {
  const {mutate: handleCreateUser, isPending} = useCreateUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
  });

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
      role: value || "user",
    });


   

  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
      setFormData((prev) => ({
        ...prev,
      }));
    
      handleCreateUser(formData);

  };

  return (
    <div className="w-full max-w-lg  rounded-lg ">
      <h1 className="text-2xl font-semibold text-center text-gray-800 my-4">
        Create a user
      </h1>
      <form
        className="p-6 h-[60vh] flex items-center justify-center flex-col overflow-y-auto"
        onSubmit={handleSubmit}
      >
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
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />

          <Input
            type="number"
            variant="underlined"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
          />
          <Input
            type="string"
            variant="underlined"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full"
          />
          <Input
            type="password"
            variant="underlined"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full"
          />
        

          <Select
            variant="underlined"
            name="role"
            label="Select role"
            onChange={handleCategorySelect}
          >
            <SelectItem key={"user"}>User</SelectItem>
            <SelectItem key={"admin"}>Admin</SelectItem>
          </Select>
        </div>
        <Button
          disabled={isPending}
          variant="flat"
          onPress={() => console.log("object")}
          type="submit"
          className="w-full disabled:bg-gray-400 h-full bg-black py-6 mt-4 text-white"
        >
          {isPending ? <CircleLoader size={24} color="white" /> : "Create User"}
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
