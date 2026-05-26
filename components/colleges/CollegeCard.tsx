import Link from "next/link";
type CollegeProps = {
  college: {
    id: number;
    name: string;
    location: string;
    fees: string;
    rating: string;
  };
};

export default function CollegeCard({
  college,
}: CollegeProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition">

      <div className="h-44 bg-gray-200"></div>

      <div className="p-5">

        <h2 className="text-2xl font-semibold">
          {college.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {college.location}
        </p>

        <div className="flex justify-between mt-5 text-sm">
          <span className="font-medium">
            Fees: {college.fees}
          </span>

          <span className="text-blue-600 font-semibold">
            ⭐ {college.rating}
          </span>
        </div>

       <Link href={`/colleges/${college.id}`}>
  <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl">
    View Details
  </button>
</Link>
      </div>
    </div>
  );
}