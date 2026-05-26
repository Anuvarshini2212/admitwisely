import Navbar from "@/components/layout/Navbar";

const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    fees: "₹2,50,000",
    rating: "4.8",
    placements: "₹25 LPA",
    location: "New Delhi",
  },
  {
    id: 2,
    name: "NIT Trichy",
    fees: "₹1,80,000",
    rating: "4.7",
    placements: "₹18 LPA",
    location: "Tamil Nadu",
  },
];

export default function ComparePage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Compare Colleges
            </h1>

            <p className="text-gray-600 mt-3">
              Compare top colleges side-by-side.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-5 text-left">
                    Features
                  </th>

                  {colleges.map((college) => (
                    <th
                      key={college.id}
                      className="p-5 text-left"
                    >
                      {college.name}
                    </th>
                  ))}
                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Location
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-5"
                    >
                      {college.location}
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Fees
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-5"
                    >
                      {college.fees}
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Placements
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-5"
                    >
                      {college.placements}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-5 font-semibold">
                    Rating
                  </td>

                  {colleges.map((college) => (
                    <td
                      key={college.id}
                      className="p-5 text-blue-600 font-bold"
                    >
                      ⭐ {college.rating}
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}