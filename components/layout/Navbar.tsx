"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    const loggedIn =
      localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

   window.location.reload();
  };

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <span className="text-3xl font-bold text-blue-600">
            AdmitWisely
          </span>

        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/colleges">
            Colleges
          </Link>

          <Link href="/compare">
            Compare
          </Link>

          <Link href="/saved">
            Saved
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login">
                Login
              </Link>

              <Link href="/signup">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                  Sign Up
                </button>

              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
            >
              Logout
            </button>
          )}

        </div>

        <button
          className="md:hidden"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? <X /> : <Menu />}

        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5 font-medium">

          <Link
            href="/colleges"
            className="block"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="block"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="block"
          >
            Saved
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="block"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="block"
              >

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
                  Sign Up
                </button>

              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-xl"
            >
              Logout
            </button>
          )}

        </div>
      )}
    </nav>
  );
}