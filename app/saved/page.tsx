"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  description: string;
  image: string;
};

export default function SavedPage() {

  const router = useRouter();

  const [savedColleges, setSavedColleges] =
    useState<College[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadSavedColleges() {

    const loggedIn =
      localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {

      router.push("/login");

      return;
    }

    const savedIds =
      JSON.parse(
        localStorage.getItem(
          "savedColleges"
        ) || "[]"
      );

    const res = await fetch(
      "/api/colleges"
    );

    const colleges =
      await res.json();

    const filtered =
      colleges.filter(
        (college: College) =>
          savedIds.includes(college.id)
      );

    setSavedColleges(filtered);

    setLoading(false);
  }

  useEffect(() => {

    loadSavedColleges();

  }, []);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">

          <p className="text-xl">
            Loading...
          </p>

        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-10">
            Saved Colleges
          </h1>

          {savedColleges.length === 0 ? (

            <div className="bg-white p-10 rounded-3xl border text-center">

              <h2 className="text-2xl font-semibold">
                No saved colleges yet
              </h2>

              <p className="text-gray-500 mt-3">
                Save colleges to view them here.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {savedColleges.map((college) => (

                <div
                  key={college.id}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden"
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

                    <Link
                      href={`/colleges/${college.id}`}
                    >

                      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                        View Details
                      </button>

                    </Link>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>
    </>
  );
}