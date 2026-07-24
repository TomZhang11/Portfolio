import { projects, contacts } from './data/site'
import { ImageCarousel } from './components/ImageCarousel'

// Section: uppercase micro-heading + content block, shared rhythm for the page.
// `delay` staggers the entrance animation top-to-bottom (disabled for reduced motion).
const Section = ({ title, delay = 0, children }) => (
    <section
        className="mt-16 motion-safe:animate-fade-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {title}
        </h2>
        <div className="mt-5">{children}</div>
    </section>
)

const AboutItem = ({ children }) => (
    <li className="flex gap-3 leading-relaxed">
        <span aria-hidden="true" className="select-none text-indigo-400">—</span>
        <span>{children}</span>
    </li>
)

const ProjectCard = ({ project }) => (
    <article className="flex flex-col rounded-xl border border-neutral-200 bg-white/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium text-neutral-900">{project.title}</h3>
            <span className="text-xs text-neutral-400">{project.period}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.description}</p>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-block text-sm text-indigo-600 hover:underline"
        >
            View on GitHub{' '}
            <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
                ↗
            </span>
        </a>
        {/* mt-auto pins carousels to the card bottom so they align across the row */}
        {project.media?.length > 0 && (
            <div className="mt-auto pt-4">
                <ImageCarousel images={project.media} />
            </div>
        )}
    </article>
)

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50/70 via-white to-white selection:bg-indigo-100">
            <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-900 sm:py-28">
                <header className="motion-safe:animate-fade-up">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Tom Zhang<span className="text-indigo-600">.</span>
                    </h1>
                    <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600">
                        Software developer in Waterloo, working on AI Chat feature for
                        clinicians at{' '}
                        <a
                            href="https://cortico.health"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            Cortico
                        </a>
                        .
                    </p>
                    <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        <a href="https://github.com/TomZhang11" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/tom-zhang-764234287/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
                        <a href="mailto:tomzhang.canada888@gmail.com" className="text-indigo-600 hover:underline">Email</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Resume</a>
                        <a href="/transcript.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Transcript</a>
                    </nav>
                </header>

                <Section title="About" delay={100}>
                    <ul className="space-y-3 text-neutral-700">
                        <AboutItem>AI agent workflow config enthusiast</AboutItem>
                        <AboutItem>
                            currently reading <em>Sapiens: A Brief History of Humankind</em>
                        </AboutItem>
                        <AboutItem>
                            wrote a search algorithm that solves Minesweeper perfectly in grade 11
                        </AboutItem>
                    </ul>
                </Section>

                <Section title="Projects" delay={200}>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </Section>

                <Section title="Contact" delay={300}>
                    <p className="text-neutral-600">Always open to chat.</p>
                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                        {contacts.map((contact) => (
                            <li key={contact.label} className="min-w-0">
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block truncate text-indigo-600 hover:underline"
                                    title={contact.label}
                                >
                                    {contact.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm">
                        <a href="/transcript.pdf" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:underline">
                            Transcript
                        </a>
                    </p>
                </Section>

                <footer className="mt-20 text-xs text-neutral-400">
                    © 2026 Tom Zhang · Waterloo, Canada
                </footer>
            </main>
        </div>
    )
}

export default App
