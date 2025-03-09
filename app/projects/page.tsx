import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projects from "@/public/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A collection of my trash.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
