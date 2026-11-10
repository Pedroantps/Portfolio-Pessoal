import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Skills = dynamic(() => import("@/components/sections/Skills").then((mod) => mod.Skills));
const Experience = dynamic(() => import("@/components/sections/Experience").then((mod) => mod.Experience));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border-subtle">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-16 py-8 flex flex-col sm:flex-row gap-2 justify-between text-sm text-text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <a href="#hero" className="hover:text-text-primary transition-colors w-fit">
            Voltar ao topo
          </a>
        </div>
      </footer>
    </>
  );
}
