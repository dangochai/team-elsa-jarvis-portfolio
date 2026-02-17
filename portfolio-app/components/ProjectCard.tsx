import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-indigo-900/20">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-950 dark:to-cyan-950">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="secondary">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full group/btn"
        >
          <Link href={`/portfolio/${project.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
