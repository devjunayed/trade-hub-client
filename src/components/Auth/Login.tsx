/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useEffect } from "react";
import LogoImg from "@/app/assets/images/trade-hub.png";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import { CircleLoader } from "react-spinners";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/context/user.provider";

const Login = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const { isLoading, setIsLoading} = useUser();
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
  }, [isSuccess, loginResponse]);

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
                className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                placeholder="Email"
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
                type="password"
                id="password"
                name="password"
                className="w-full border-primary px-4 py-2 border rounded-md outline-none focus:border-accent"
                placeholder="Password"
                required
              />
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="w-full flex justify-center py-2 mt-6 disabled:bg-gray-400 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none"
            >
              {isPending ? <CircleLoader size={24} color="white" /> : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
