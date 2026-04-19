import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zaheer Hussain — DevOps · Full-Stack · Security" },
      {
        name: "description",
        content:
          "Interactive 3D portfolio of Zaheer Hussain, B.Tech Computer Science student building at the intersection of DevOps, AI/ML, and Cybersecurity.",
      },
      { property: "og:title", content: "Zaheer Hussain — Portfolio" },
      {
        property: "og:description",
        content:
          "Building secure, intelligent, scalable systems. Full-stack web, embedded hardware, DevOps.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <SocialSidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
