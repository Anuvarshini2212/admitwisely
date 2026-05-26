import CollegeGrid from "@/components/colleges/CollegeGrid";

export default function FeaturedColleges() {

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">

          <h2 className="text-5xl font-bold">
            Featured Colleges
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Explore top colleges with placements, rankings, and fees.
          </p>

        </div>

        <CollegeGrid search="" />

      </div>
    </section>
  );
}