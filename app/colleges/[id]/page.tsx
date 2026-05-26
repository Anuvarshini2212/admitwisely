import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

async function getCollege(id: string) {

  const res = await fetch(
    `http://localhost:3000/api/colleges/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch college"
    );
  }

  return res.json();
}

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const college =
    await getCollege(id);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 pb-20">

        <div className="relative">

          <img
            src={college.image}
            alt={college.name}
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">

            <div className="flex items-end justify-between text-white">

              <div>

                <p className="uppercase tracking-[4px] text-blue-300 mb-3">

                  Top Engineering College

                </p>

                <h1 className="text-6xl font-bold">

                  {college.name}

                </h1>

                <p className="mt-4 text-xl text-gray-200">

                  📍 {college.location}

                </p>

              </div>

              <div className="bg-white/20 backdrop-blur-md px-8 py-5 rounded-3xl border border-white/20">

                <p className="text-lg text-gray-200">
                  Rating
                </p>

                <h2 className="text-5xl font-bold mt-2">

                  ⭐ {college.rating}

                </h2>

              </div>

            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">

          <div className="bg-white rounded-[32px] shadow-2xl p-10">

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border">

                <p className="text-gray-500 text-lg">
                  Annual Fees
                </p>

                <h2 className="text-4xl font-bold mt-4">

                  ₹{college.fees}

                </h2>

              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border">

                <p className="text-gray-500 text-lg">
                  Placements
                </p>

                <h2 className="text-3xl font-bold mt-4 leading-snug">

                  {college.placements}

                </h2>

              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 border">

                <p className="text-gray-500 text-lg">
                  Student Rating
                </p>

                <h2 className="text-4xl font-bold mt-4">

                  {college.rating}/5

                </h2>

              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition">

                Apply Now

              </button>

              <Link href="/compare">

                <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-2xl font-medium transition">

                  Compare College

                </button>

              </Link>

            </div>

            <div className="mt-16">

              <h2 className="text-4xl font-bold mb-6">

                Overview

              </h2>

              <p className="text-gray-700 text-lg leading-9">

                {college.description}

                {" "}

                This institution is known for
                excellent academic performance,
                strong placements, modern campus
                facilities, and outstanding student
                opportunities across engineering
                and technology domains.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">

              <div className="bg-gray-50 rounded-3xl p-8 border">

                <h3 className="text-2xl font-bold mb-5">

                  Highlights

                </h3>

                <ul className="space-y-4 text-gray-700">

                  <li>
                    ✅ Strong placement record
                  </li>

                  <li>
                    ✅ Modern infrastructure
                  </li>

                  <li>
                    ✅ Experienced faculty
                  </li>

                  <li>
                    ✅ National reputation
                  </li>

                </ul>

              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border">

                <h3 className="text-2xl font-bold mb-5">

                  Admission Process

                </h3>

                <ul className="space-y-4 text-gray-700">

                  <li>
                    1. Entrance Examination
                  </li>

                  <li>
                    2. Counseling Process
                  </li>

                  <li>
                    3. Document Verification
                  </li>

                  <li>
                    4. Fee Submission
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}