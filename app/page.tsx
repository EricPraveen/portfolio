import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LoadingScreen from "@/components/UI/LoadingScreen";
import CursorGlow from "@/components/UI/CursorGlow";
import ScrollProgress from "@/components/UI/ScrollProgress";

export default function Home() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: "#020209" }}>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
    </main>
  );
}