import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="relative rounded-lg overflow-hidden shadow-lg w-10/12 md:w-8/12 lg:w-6/12 xl:w-7/12 h-3/4">
        <div className="absolute inset-0 bg-accent z-0"></div>
        <div className="relative z-10 flex h-full">
          {/* Left Side */}
          <div className="w-1/2 flex flex-col items-center justify-center bg-background px-4 py-8">
            <h2 className="text-4xl font-semibold text-primary mb-4">Welcome Back</h2>
            <p className="text-gray-700 mb-8">Please sign in to your account.</p>
            <p className="text-xs text-gray-500">Don’t have an account? <a href="#" className="text-accent underline">Sign up</a></p>
          </div>

          {/* Right Side */}
          <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 ml-1  block text-sm font-medium text-gray-600">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md outline-none focus:border-accent" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 ml-1 block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" className="w-full px-4 py-2 border rounded-md outline-none focus:border-accent" placeholder="Password" required />
              </div>
              <button type="submit" className="w-full py-2 mt-6 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage
