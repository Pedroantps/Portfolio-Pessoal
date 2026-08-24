import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Skills = dynamic(() => import("@/components/sections/Skills").then((mod) => mod.Skills));
const Experience = dynamic(() => import("@/components/sections/Experience").then((mod) => mod.Experience));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-12 2xl:px-24 3xl:px-32 w-full max-w-[1800px] mx-auto">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <footer className="py-8 text-center text-text-muted border-t border-border-subtle mt-12">
        <p>© {new Date().getFullYear()} Desenvolvido por Pedro Antônio.</p>
      </footer>
    </>
  );
}
