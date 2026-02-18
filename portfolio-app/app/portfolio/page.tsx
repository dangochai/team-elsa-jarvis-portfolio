import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import type { Project } from "@/types";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore all projects built by Team Elsa & Jarvis — AI agents, web apps, DevOps tools, and more.",
  openGraph: {
    title: "Portfolio | Team Elsa & Jarvis",
    description: "Explore all projects built by Team Elsa & Jarvis — AI agents, web apps, DevOps tools, and more.",
  },
};

async function getProjects() {
  const projects = await prisma.project.findMany();
  return projects.map(p => ({
    ...p,
    techStack: p.techStack.split(','),
    screenshots: JSON.parse(p.screenshots),
    features: JSON.parse(p.features),
  } as unknown as Project));
}

export default async function PortfolioPage() {
  const projects = await getProjects();
  return <PortfolioClient projects={projects} />;
}
