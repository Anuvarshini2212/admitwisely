"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  description: string;
  image: string;
};

export default function CollegeGrid({
 search,
location,
rating,
}: {
  search: string;
location?: string;
rating?: string;
}) {

  const [colleges, setColleges] =
    useState<College[]>([]);

  const [saved, setSaved] =
    useState<string[]>([]);

  useEffect(() => {

    async function fetchColleges() {

      try {

        const res = await fetch(
          `/api/colleges?search=${search}&location=${location}&rating=${rating}`
        );

        const data = await res.json();

        setColleges(data);

      } catch (error) {

        console.error(
          "Failed to fetch colleges",
          error
        );
      }
    }

    fetchColleges();

  }, [search, location, rating]);

  useEffect(() => {

    const savedColleges =
      JSON.parse(
        localStorage.getItem(
          "savedColleges"
        ) || "[]"
      );

    setSaved(savedColleges);

  }, []);

  const handleSave = (id: string) => {

    let updatedSaved;

    if (saved.includes(id)) {

      updatedSaved =
        saved.filter(
          (item) => item !== id
        );

    } else {

      updatedSaved = [
        ...saved,
        id,
      ];
    }

    setSaved(updatedSaved);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(updatedSaved)
    );

    window.dispatchEvent(
  new Event("savedCollegesUpdated")
);
  };

  if (colleges.length === 0) {
    return (
      <div className="bg-white p-10 rounded-2xl border text-center">

        <h2 className="text-2xl font-bold">
          No colleges found
        </h2>

        <p className="text-gray-500 mt-3">
          Try another search keyword.
        </p>

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {colleges.map((college) => (

        <div
          key={college.id}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition"
        >

          <img
            src={college.image}
            alt={college.name}
            className="h-44 w-full object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-semibold">
              {college.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {college.location}
            </p>

            <div className="flex justify-between mt-5 text-sm">

              <span className="font-medium">
                Fees: ₹{college.fees}
              </span>

              <span className="text-blue-600 font-semibold">
                ⭐ {college.rating}
              </span>

            </div>

            <p className="mt-4 text-gray-600 text-sm">
              {college.description}
            </p>

            <button
              onClick={() =>
                handleSave(college.id)
              }
              className={`mt-4 w-full py-3 rounded-xl transition ${
                saved.includes(college.id)
                  ? "bg-green-500 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {saved.includes(college.id)
                ? "Saved"
                : "Save College"}
            </button>

            <Link
              href={`/colleges/${college.id}`}
            >

              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                View Details
              </button>

            </Link>

          </div>
        </div>
      ))}

    </div>
  );
}