/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent,  useEffect } from "react";
import LogoImg from "@/app/assets/images/trade-hub.png";
import { useUserRegistration } from "@/hooks/auth.hook";
import { CircleLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/user.provider";

const Register = () => {
  const { mutate: handleUserRegistration, isPending, isSuccess } = useUserRegistration();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const {user} = useUser();

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    handleUserRegistration(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      }
      
      if(user){
        router.push('/')
      }
    }
  }, [isPending, isSuccess,user]);

  return (


    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      {/* Inner Container */}
      <div className="flex sm:flex-row flex-col border-t-4 border-primary w-full mx-4 sm:mx-10 md:w-9/12 lg:w-8/12 xl:w-7/12 h-5/6 sm:h-3/4 shadow-lg rounded">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 h-full flex flex-col items-center justify-center bg-background px-4 py-8">
          <Image
            className="mb-4"
            src={LogoImg}
            width={150}
            height={150}
            alt="logo"
          />
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Create an Account
          </h2>
          <p className="text-xs text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-accent underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/2 h-full bg-white flex flex-col justify-center">
          <div className="overflow-y-auto pr-6 pl-6  max-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-light ml-1 mb-2 text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button
                disabled={isPending}
                type="submit"
                className="w-full flex justify-center py-2 mt-6 disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
              >
                {isPending ? <CircleLoader size={24} color="white" /> : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;
