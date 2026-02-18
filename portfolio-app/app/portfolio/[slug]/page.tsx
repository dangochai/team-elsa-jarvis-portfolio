import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2, Bot, Cpu, BookOpen, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate, getStatusVariant } from "@/lib/utils";
import type { Project } from "@/types";
import { prisma } from "@/lib/prisma";

interface ProjectPageProps {
  params: { slug: string };
}

async function getProject(slug: string) {
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) return null;

  return {
    ...project,
    techStack: project.techStack.split(','),
    screenshots: JSON.parse(project.screenshots),
    features: JSON.parse(project.features),
  } as unknown as Project;
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: { slug: true }
  });
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Team Elsa & Jarvis`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const statusVariant = getStatusVariant(project.status);
  const isAutonomousAgent = params.slug === "autonomous-coding-agent";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to Portfolio
        </Link>
      </div>

      {/* ── Project Header ── */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant={statusVariant}>
            {project.status}
          </Badge>
          <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={project.date}>{formatDate(project.date)}</time>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {project.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Button asChild variant="default" size="lg">
            <a
              href={project.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View Code
            </a>
          </Button>
          {project.liveDemo && (
            <Button asChild variant="accent" size="lg">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </header>

      {/* ── About Section ── */}
      <section className="mb-10" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          About
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* ── Project Dashboard (autonomous-coding-agent only) ── */}
      {isAutonomousAgent && (
        <section className="mb-10" aria-labelledby="dashboard-heading">
          <h2 id="dashboard-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            Project Dashboard
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Agent Roster */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Agent Roster</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-xs font-bold text-indigo-600 dark:text-indigo-300">E</span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Elsa — Coordinator</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">claude-sonnet-4-5 · User-facing, PR review &amp; merge</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900 text-xs font-bold text-emerald-600 dark:text-emerald-300">J</span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Jarvis — Technical Worker</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">claude-haiku-4-5 · Ephemeral · Code, git, DevOps</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900 text-xs font-bold text-pink-600 dark:text-pink-300">A</span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Anna — Research &amp; Content</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">gemini-flash · Ephemeral · Docs, research, content</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation Status */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Live &amp; Working</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Portfolio site (Next.js 14 + Tailwind CSS)",
                  "SQLite + Prisma 6.4.0 data layer",
                  "Vitest + React Testing Library (tests passing)",
                  "PR workflow: branch → review → merge",
                  "PR #1 merged: Futuristic design update",
                  "OpenClaw heartbeat monitoring & cron jobs",
                  "Ephemeral session management (spawn & delete)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* V2 Roadmap */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">V2 Roadmap</h3>
              </div>
              <ol className="space-y-3">
                {[
                  { phase: "Phase 1", label: "CI/CD Pipeline", desc: "GitHub Actions, automated test gates" },
                  { phase: "Phase 2", label: "Content & Assets", desc: "Real screenshots, project media, Notion sync" },
                  { phase: "Phase 3", label: "Interactive Features", desc: "Live status feed, agent activity log" },
                ].map(({ phase, label, desc }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Badge variant="tech" className="shrink-0 text-xs px-2 py-0.5">{phase}</Badge>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Architecture Note */}
            <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-indigo-500 dark:text-indigo-400" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Architecture</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                Based on Anthropic&apos;s{" "}
                <a
                  href="https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-200"
                >
                  claude-quickstarts autonomous-coding pattern
                </a>
                . The original two-agent model (Initializer + Coding Agent) is extended into a 3-agent system with role separation: coordination, implementation, and research/content.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="tech" className="text-xs">OpenClaw Gateway</Badge>
                <Badge variant="tech" className="text-xs">Ephemeral Sessions</Badge>
                <Badge variant="tech" className="text-xs">PR Workflow</Badge>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Key Features Section ── */}
      <section className="mb-10" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          Key Features
        </h2>
        <ul className="space-y-2.5">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-slate-600 dark:text-slate-400">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Screenshots Section ── */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-10" aria-labelledby="screenshots-heading">
          <h2 id="screenshots-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            Screenshots
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:border-slate-700 dark:from-indigo-950 dark:to-cyan-950"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Tech Stack Section ── */}
      <section aria-labelledby="tech-stack-heading">
        <h2 id="tech-stack-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="tech" className="text-sm px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
