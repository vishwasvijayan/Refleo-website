import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FoundingStory from "@/components/sections/FoundingStory";
import Product from "@/components/sections/Product";
import Validation from "@/components/sections/Validation";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import MissionCloser from "@/components/sections/MissionCloser";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <FoundingStory />
        <Product />
        <Validation />
        <Team />
        <Contact />
        <MissionCloser />
      </main>
    </>
  );
}
