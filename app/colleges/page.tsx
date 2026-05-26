import Navbar from "@/components/layout/Navbar";
import CollegeGrid from "@/components/colleges/CollegeGrid";
import CollegeFilters from "@/components/colleges/CollegeFilters";
import SearchBar from "@/components/colleges/SearchBar";

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
location?: string;
rating?: string;
  }>;
}) {

  const params = await searchParams;

  const search =
  params.search || "";

const location =
  params.location || "";

const rating =
  params.rating || "";

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              Explore Colleges
            </h1>

          <p className="text-gray-600 mt-3 text-lg leading-8 max-w-3xl">
  Discover top colleges, compare placements, fees, rankings, and make smarter admission decisions with confidence.
</p>

          </div>

          <SearchBar />

          <div className="grid lg:grid-cols-4 gap-8">

            <div>
              <CollegeFilters />
            </div>

            <div className="lg:col-span-3">
              <CollegeGrid
  search={search}
/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}