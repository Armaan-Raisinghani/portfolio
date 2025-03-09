import experience from "@/public/data/experience.json";
export default function ExperiencePage() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Work Experience
        </h2>
        <div className="mx-auto max-w-3xl border-l-2 border-primary">
          {experience.map((job, index) => (
            <div key={index} className="mb-8 pl-6">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="mb-2 flex items-center text-sm text-muted-foreground">
                <span>{job.company}</span>
                <span className="mx-2">•</span>
                <span>{job.period}</span>
              </div>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
