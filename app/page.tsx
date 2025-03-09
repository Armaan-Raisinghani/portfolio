import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import achievements from "@/public/data/achievements.json";
import projects from "@/public/data/projects.json";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm{" "}
                  <span className="text-primary">Armaan Raisinghani</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Useless piece of shit
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h2>
            <p className="mb-8 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              feugiat lorem. Integer sed lacus ex. Ut sed faucibus nulla. Fusce
              convallis sodales tempus. Aliquam ut tortor quis dolor mollis
              blandit. Ut ut sagittis eros. Cras orci justo, rutrum at finibus
              eu, malesuada sit amet nulla. Mauris porttitor egestas nunc ut
              placerat. Donec varius, leo non ornare molestie, ligula nisi
              viverra urna, vitae vehicula sem ex a nunc. Sed eu quam purus.
              Vestibulum in porttitor lacus, eget facilisis elit. Nam eu elit
              fringilla, molestie dolor nec, consectetur mi. Phasellus et elit
              lorem. Phasellus aliquam ipsum quis mauris sagittis mattis. Duis
              vehicula ligula non arcu ullamcorper vehicula eget vitae nibh.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">
                  Programming Languages
                </h3>
                <p className="text-sm text-muted-foreground">
                  JavaScript, Python, HTML, CSS, C (Intermediate), Java
                  (Intermediate), C# (Beginner)
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">
                  Tools and Technologies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Node.js, SQL, PostgreSQL, MongoDB, Git, Postman
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Frameworks</h3>
                <p className="text-sm text-muted-foreground">
                  React.js, Next.js, Tailwind CSS, Express.js, React Native,
                  FastAPI, Angular
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Project Spotlight
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg"
              >
                <div className="aspect-square w-full overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg`}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                    href={`/projects/${index + 1}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Achievements
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">{achievement.title}</h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What People Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Shreya Khanna",
                role: "Tech support, Microsoft",
                content: "Its honestly not that cool",
                image: "/placeholder.svg",
              },
              {
                name: "Ayushmaan .",
                role: "Roommate",
                content:
                  "You should write your own quote. That would be funny. Write something in Sindhi.",
                image: "/placeholder.svg",
              },
              {
                name: "Arun Almahdi",
                role: "Tech support, Microsoft",
                content: "What",
                image: "/placeholder.svg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <p className="mb-4 italic text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center ">
                  <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-primary/10 relative aspect-square">
                    <Image
                      src="/placeholder.svg"
                      alt={testimonial.name}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
