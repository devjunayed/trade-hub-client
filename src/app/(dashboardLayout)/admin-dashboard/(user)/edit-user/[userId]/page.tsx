/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEditUser, useGetUser } from "@/hooks/user.hook";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { FormEvent, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CircleLoader } from "react-spinners";

const EditUser = ({ params }: { params: { userId: string } }) => {
  const { data: user, isLoading } = useGetUser(params?.userId);

  const { mutate: handleEditUser, isPending } = useEditUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      const { name, email, phone, address, role } = user[0];
      setFormData({ name, email, phone, address, role, password: "" });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleSelect = (eventOrValue: any) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setFormData({
      ...formData,
      role: value ,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
    }));

    handleEditUser(formData);
  };

  return (
    <div className="relative w-full   rounded-lg ">
      <div className="absolute gap-4 flex items-center justify-center top-4 left-4">
        <Button
          onPress={() => window.history.back()}
          className="bg-[#262626] text-white text-xl"
        >
          <BsArrowLeft />
        </Button>
        <h1 className="text-xl font-semibold text-center text-gray-800 my-4">
          Edit User
        </h1>
      </div>
      <div className="flex mt-4 justify-center items-center w-full h-full">
        <form
          className="p-6 max-w-lg  h-[60vh] flex items-center justify-center flex-col overflow-y-auto"
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
              type="text"
              variant="underlined"
              label="Password"
              autoComplete="off"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
            />

{(formData.role === "admin" || formData.role === "user") && (
  <Select
  autoCorrect={formData.role}
  autoComplete={formData.role}
  defaultSelectedKeys={formData.role}
    key={formData.role} // Ensures re-render if role changes
    variant="underlined"
    name="role"
    label="Select role"
    placeholder={formData.role}
    value={formData.role} // Controlled value
    onChange={handleRoleSelect} // Update state on change
  >
    <SelectItem value="user"   key="user">
      User
    </SelectItem>
    <SelectItem value="admin" key="admin">
      Admin
    </SelectItem>
  </Select>
)}

          </div>
          <Button
            disabled={isPending}
            variant="flat"
            onPress={() => console.log("object")}
            type="submit"
            className="w-full disabled:bg-gray-400 h-full bg-black py-6 mt-4 text-white"
          >
            {isPending ? (
              <CircleLoader size={24} color="white" />
            ) : (
              "Save"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
