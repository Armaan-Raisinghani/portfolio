import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import projects from "@/public/data/projects.json";
interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = Number.parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
      </Link>

      <div className="mb-8 overflow-hidden rounded-lg aspect-square relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="w-full object-cover"
        />
      </div>

      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{project.title}</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
          <div className="prose max-w-none dark:prose-invert">
            <p className="whitespace-pre-line">{project.fullDescription}</p>
          </div>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Features</h2>
          <ul className="grid gap-2 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Project Details</h3>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Links</h4>
              <div className="space-y-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md border border-input bg-background px-4 py-2 text-center text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
