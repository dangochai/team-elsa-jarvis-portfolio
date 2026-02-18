import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import { prisma } from "@/lib/prisma";
import type { Project, TeamMember } from "@/types";

async function getHomePageData() {
  const [projects, team] = await Promise.all([
    prisma.project.findMany({
      where: { featured: true },
      take: 3,
    }),
    prisma.teamMember.findMany(),
  ]);

  // Map Prisma models to the UI-friendly Project/TeamMember types if necessary
  // (e.g., parsing techStack string back to array)
  const mappedProjects: Project[] = projects.map(p => ({
    ...p,
    techStack: p.techStack.split(','),
    screenshots: JSON.parse(p.screenshots),
    features: JSON.parse(p.features),
  } as unknown as Project));

  const mappedTeam: TeamMember[] = team.map(m => ({
    ...m,
  } as unknown as TeamMember));

  return { featuredProjects: mappedProjects, team: mappedTeam };
}

export default async function HomePage() {
  const { featuredProjects, team } = await getHomePageData();

  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-800/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Badge className="gap-1.5 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              AI-Powered Development
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building the Future with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous Agents
            </span>
          </h1>

          <p className="mt-6 text-lg text-indigo-200 sm:text-xl max-w-2xl mx-auto">
            Team Elsa &amp; Jarvis — Innovation in Code &amp; AI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="accent" className="group">
              <Link href="/portfolio">
                View Our Work
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-indigo-400 text-indigo-200 hover:bg-indigo-800 hover:text-white dark:border-indigo-400 dark:text-indigo-200 dark:hover:bg-indigo-800">
              <Link href="/resources">
                Explore Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Team Intro Section ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Meet the Builders
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We are a human-AI team on a mission to push the boundaries of what&apos;s possible with
              autonomous software development. Every project we build is a step toward the future of
              intelligent computing.
            </p>
          </div>

          {/* Team Member Cards */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {team.map((member) => (
              <Card key={member.id} className="text-center p-6 hover:shadow-md transition-shadow dark:bg-slate-900">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  {/* Avatar */}
                  <div className="relative h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={`${member.name} avatar`}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                    <span className="text-2xl font-bold text-white" aria-hidden="true">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects Section ── */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-950">
                  <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                  Featured
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                Our most impactful work — where AI meets engineering excellence.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
