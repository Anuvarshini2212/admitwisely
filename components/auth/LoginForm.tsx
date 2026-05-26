"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    router.push("/");

    router.refresh();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-5"
    >

      <div>

        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-xl p-4 outline-none"
          required
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border rounded-xl p-4 outline-none"
          required
        />

      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium transition"
      >
        Login
      </button>

    </form>
  );
}