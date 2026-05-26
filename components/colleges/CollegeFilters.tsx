export default function CollegeFilters() {

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border">

      <h2 className="text-2xl font-bold mb-8">
        Filters
      </h2>

      <div className="space-y-6">

        <div>

          <label className="block mb-3 font-medium">
            Location
          </label>

          <select className="w-full border rounded-xl p-4">

            <option>
              All
            </option>

            <option>
              Tamil Nadu
            </option>

            <option>
              Delhi
            </option>

          </select>

        </div>

        <div>

          <label className="block mb-3 font-medium">
            Rating
          </label>

          <select className="w-full border rounded-xl p-4">

            <option>
              All
            </option>

            <option>
              4.5+
            </option>

            <option>
              4.7+
            </option>

          </select>

        </div>

        <div>

          <label className="block mb-3 font-medium">
            Fees
          </label>

          <select className="w-full border rounded-xl p-4">

            <option>
              All
            </option>

            <option>
              Below ₹2 Lakhs
            </option>

            <option>
              Above ₹2 Lakhs
            </option>

          </select>

        </div>

      </div>
    </div>
  );
}