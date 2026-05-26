"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {

  const [search, setSearch] =
    useState("");

  return (
    <section className="min-h-screen bg-gray-50 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight text-gray-900">

            Discover & Compare Top Colleges Across India

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            Search colleges, compare placements, fees,
            rankings, and make smarter admission decisions
            with AdmitWisely.

          </p>

          <div className="flex gap-4 mt-10">

            <Link href="/colleges">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition">

                Explore Colleges

              </button>

            </Link>

            <Link href="/compare">

              <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-2xl font-medium transition">

                Compare Colleges

              </button>

            </Link>

          </div>

        </div>

        <div className="bg-white p-10 rounded-3xl shadow-lg border">

          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-2xl p-5 outline-none text-lg"
          />

          <Link
            href={`/colleges?search=${search}`}
          >

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg font-medium transition">

              Search Colleges

            </button>

          </Link>

        </div>

      </div>
    </section>
  );
}