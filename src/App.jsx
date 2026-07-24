import { projects, contacts } from './data/site'
import { ImageCarousel } from './components/ImageCarousel'

// Section: uppercase micro-heading + content block, shared rhythm for the page.
const Section = ({ title, children }) => (
    <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {title}
        </h2>
        <div className="mt-5">{children}</div>
    </section>
)

const NowItem = ({ children }) => (
    <li className="flex gap-3 leading-relaxed">
        <span aria-hidden="true" className="select-none text-neutral-300">—</span>
        <span>{children}</span>
    </li>
)

const ProjectCard = ({ project }) => (
    <article className="rounded-xl border border-neutral-200 p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium text-neutral-900">{project.title}</h3>
            <span className="text-xs text-neutral-400">{project.period}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.description}</p>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-indigo-600 hover:underline"
        >
            View on GitHub ↗
        </a>
        {project.media?.length > 0 && (
            <div className="mt-4">
                <ImageCarousel images={project.media} />
            </div>
        )}
    </article>
)

function App() {
    return (
        <main className="mx-auto max-w-2xl px-6 py-20 text-neutral-900 sm:py-28">
            <header>
                <h1 className="text-3xl font-semibold tracking-tight">Tom Zhang</h1>
                <p className="mt-3 leading-relaxed text-neutral-600">
                    Software developer in Saskatoon, building an AI Chat feature for
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
                </nav>
            </header>

            <Section title="Now">
                <ul className="space-y-3 text-neutral-700">
                    <NowItem>
                        Shipping AI chat to clinicians at Cortico — LLMs meeting real
                        healthcare workflows.
                    </NowItem>
                    <NowItem>
                        AI agent workflow config enthusiast: the kind of person who
                        version-controls his agents&apos; context layers.
                    </NowItem>
                    <NowItem>
                        Reading <em>Sapiens: A Brief History of Humankind</em>.
                    </NowItem>
                </ul>
            </Section>

            <Section title="Projects">
                <div className="space-y-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </Section>

            <Section title="Contact">
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
                © 2026 Tom Zhang
            </footer>
        </main>
    )
}

export default App
