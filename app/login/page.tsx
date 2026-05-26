import Navbar from "@/components/layout/Navbar";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 flex items-center justify-center">

        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Login
          </h1>

          <LoginForm />

        </div>
      </section>
    </>
  );
}