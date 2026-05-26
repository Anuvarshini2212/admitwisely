import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import StatsSection from "@/components/home/StatsSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedColleges />
    </main>
  );
}