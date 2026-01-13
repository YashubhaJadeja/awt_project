"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    role === "admin"
      ? router.push("/admin")
      : router.push("/user");
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a]">
    <div className="relative p-[2px] rounded-xl 
      bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500">

      <form
        onSubmit={handleLogin}
        className="bg-[#111827] rounded-xl p-8 w-96 text-white"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Sign in
        </h2>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="UserName"
            className="w-full bg-transparent border-b border-gray-500 
              focus:outline-none focus:border-cyan-400 
              placeholder-gray-400 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-500 
              focus:outline-none focus:border-pink-400 
              placeholder-gray-400 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Extra Links */}
        <div className="flex justify-between text-sm mb-6">
          <span className="text-gray-400 cursor-pointer hover:text-white">
            Forget Password
          </span>
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Signup
          </span>
        </div>

        {/* Role */}
        <select
          className="w-full mb-6 bg-[#111827] border border-gray-600 
            rounded px-3 py-2 focus:outline-none"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-white text-black 
            font-semibold hover:bg-gray-200 transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
}