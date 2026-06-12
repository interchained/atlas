import Audiences from "@/components/Audiences";
import BridgeDiagram from "@/components/BridgeDiagram";
import CommandPalette from "@/components/CommandPalette";
import Constellation from "@/components/Constellation";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Interlocks from "@/components/Interlocks";
import MiniNav from "@/components/MiniNav";
import OpenSourceSection from "@/components/OpenSourceSection";
import PowStory from "@/components/PowStory";
import RealWorld from "@/components/RealWorld";
import ScrollProgress from "@/components/ScrollProgress";
import StackExplorer from "@/components/StackExplorer";
import Thesis from "@/components/Thesis";
import Timeline from "@/components/Timeline";

export default function Page() {
  return (
    <>
      <Constellation />
      <ScrollProgress />
      <MiniNav />
      <CommandPalette />
      <main>
        <Hero />
        <Thesis />
        <StackExplorer />
        <Interlocks />
        <BridgeDiagram />
        <PowStory />
        <RealWorld />
        <OpenSourceSection />
        <Timeline />
        <Audiences />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
