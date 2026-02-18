import type { Metadata } from "next";
import { ExternalLink, Bot, Server, BookOpen } from "lucide-react";
import type { Resource } from "@/types";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Resources",
  description: "A curated list of tools, libraries, AI models, and learning resources used and recommended by Team Elsa & Jarvis.",
  openGraph: {
    title: "Resources | Team Elsa & Jarvis",
    description: "Curated tools, libraries, AI models, and learning resources from Team Elsa & Jarvis.",
  },
};

const CATEGORY_CONFIG: Record<string, { icon: React.ElementType; description: string }> = {
  "AI Models": {
    icon: Bot,
    description: "AI APIs and models we use to power our intelligent applications.",
  },
  "DevOps": {
    icon: Server,
    description: "Infrastructure, deployment, and operations tools in our stack.",
  },
  "Learning": {
    icon: BookOpen,
    description: "Documentation, guides, and educational resources we rely on.",
  },
};

function groupByCategory(resources: Resource[]) {
  return resources.reduce<Record<string, Resource[]>>((groups, resource) => {
    const category = resource.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(resource);
    return groups;
  }, {});
}

async function getResources() {
  const resources = await prisma.resource.findMany();
  return resources.map(r => ({ ...r } as unknown as Resource));
}

export default async function ResourcesPage() {
  const resources = await getResources();
  const groupedResources = groupByCategory(resources);
  const categories = Object.keys(groupedResources);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          Resources
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A curated collection of tools, libraries, and learning resources that we use and
          recommend. Everything that powers our development workflow and helps us build
          better AI-driven applications.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="space-y-12">
        {categories.map((category) => {
          const categoryResources = groupedResources[category];
          const config = CATEGORY_CONFIG[category];
          const Icon = config?.icon ?? BookOpen;

          return (
            <section key={category} aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950">
                  <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xl font-semibold text-slate-900 dark:text-slate-100"
                  >
                    {category}
                  </h2>
                  {config?.description && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {config.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Resource Items */}
              <div className="space-y-3 pl-0 sm:pl-4">
                {categoryResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="group flex items-start justify-between gap-4 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          aria-label={`${resource.name} - opens in new tab`}
                        >
                          {resource.name}
                        </a>
                        <ExternalLink
                          className="h-3.5 w-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${resource.name}`}
                      className="shrink-0 p-2 rounded-md text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
