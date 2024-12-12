import React from 'react';

const LoginPage = () => {
  return (
    <main className="h-screen flex bg-[#f8f8ff]">
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://prium.github.io/phoenix/v1.13.0/assets/img/bg/30.png')",
          }}
        ></div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center px-8 bg-[#f8f8ff]">
        <div className="max-w-md w-full">
          <div className="text-center mb-6">
            <a
              href="/"
              className="flex items-center justify-center text-decoration-none mb-4"
            >
              <img
                src="/images/logo.png" 
                alt="Logo"
                width="60%"
                className="mr-2"
              />
            </a>
            <h3 className="text-3xl font-bold text-gray-800">Sign In</h3>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <a href="/forgot-password" className="text-blue-500 text-sm underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{' '}
              <a href="/auth/register" className="text-blue-500 underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
