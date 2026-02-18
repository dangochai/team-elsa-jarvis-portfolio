import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
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
