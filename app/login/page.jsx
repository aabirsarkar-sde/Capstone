"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden p-4">
     
      <div className="absolute top-20 right-20 w-64 h-64 border-4 border-blue-500 rounded-full border-t-transparent border-l-transparent border-r-transparent transform rotate-45 opacity-30 blur-sm"></div>

   
      <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg w-full max-w-md z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>

    
      <div className="absolute top-12 right-12 flex gap-2">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="block w-1 h-1 bg-blue-400 rounded-full"
          ></span>
        ))}
      </div>
    </div>
  );
}
