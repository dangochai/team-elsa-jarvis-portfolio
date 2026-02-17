import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import type { Project } from "@/types";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore all projects built by Team Elsa & Jarvis — AI agents, web apps, DevOps tools, and more.",
  openGraph: {
    title: "Portfolio | Team Elsa & Jarvis",
    description: "Explore all projects built by Team Elsa & Jarvis — AI agents, web apps, DevOps tools, and more.",
  },
};

const projects = projectsData as Project[];

export default function PortfolioPage() {
  return <PortfolioClient projects={projects} />;
}
