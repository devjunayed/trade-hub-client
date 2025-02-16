/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import LogoImg from "@/app/assets/images/trade-hub.png";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import { CircleLoader } from "react-spinners";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/context/user.provider";
import { BiLogIn } from "react-icons/bi";
import { FaUser, FaUserShield } from "react-icons/fa";

const Login = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const router = useRouter();
  const { user, isLoading, setIsLoading } = useUser();
  const {
    mutate: handleLogin,
    data: loginResponse,
    isPending,
    isSuccess,
  } = useUserLogin();

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    handleLogin(data);
    setIsLoading(true);
  };

  useEffect(() => {
    if (loginResponse?.data?.accessToken && isSuccess) {
      setIsLoading(false);
      if (!isLoading) {
        const decodedToken = jwtDecode(loginResponse?.data?.accessToken) as any;

        if (redirect) {
          router.push(redirect);
        }
        if (decodedToken?.role === "admin") {
          router.push("/admin-dashboard");
        }
        if (decodedToken?.role === "user") {
          router.push("/user-dashboard");
        }
      }
    }
  }, [isSuccess, loginResponse, user, isLoading]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      {/* inner container */}
      <div className="flex sm:flex-row flex-col border-t-4 border-primary w-full mx-4 sm:mx-10 md:w-9/12 lg:w-8/12 xl:w-7/12 h-5/6 sm:h-3/4 shadow-lg rounded">
        {/* Left side */}
        <div className="w-full sm:w-1/2 h-full flex flex-col items-center justify-center bg-background px-4 py-8">
          <Image
            className={"mb-4"}
            src={LogoImg}
            width={150}
            height={150}
            alt="logo"
          />
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-700 mb-8">Please sign in to your account.</p>
          <p className="text-xs text-gray-500">
            Don’t have an account?{" "}
            <Link href="/register" className="text-accent underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full bg-white sm:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() =>
                setUserCred({ email: "admin@gmail.com", password: "admin123" })
              }
              className="w-full flex justify-center py-2 disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none "
            >
              <span className="flex items-center justify-center gap-2">
                <FaUserShield size={22} /> Admin Login
              </span>
            </button>
            <button
              onClick={() =>
                setUserCred({ email: "user@gmail.com", password: "user123" })
              }
              className="w-full flex justify-center py-2  disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
            >
              <span className="flex gap-2 items-center justify-center">
                {" "}
                <FaUser size={18} /> User Login
              </span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                value={userCred.email}
                className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                placeholder="Email"
                onChange={(e)=> setUserCred({...userCred, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-light text-sm mb-2 ml-1 text-gray-600"
              >
                Password
              </label>
              <input
                value={userCred.password}
                type="password"
                id="password"
                name="password"
                className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                placeholder="Password"
                onChange={(e)=> setUserCred({...userCred, password: e.target.value})}
                required
              />
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="w-full flex justify-center py-2 mt-6 disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
            >
              {isPending ? (
                <CircleLoader size={24} color="white" />
              ) : (
                <span className="flex gap-2 items-center justify-center">
                  <BiLogIn size={18} /> Sign In
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
