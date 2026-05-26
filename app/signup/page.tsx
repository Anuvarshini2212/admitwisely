import Navbar from "@/components/layout/Navbar";

export default function SignupPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 flex items-center justify-center">

        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h1>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl p-4"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium">
              Create Account
            </button>

          </form>

        </div>
      </section>
    </>
  );
}