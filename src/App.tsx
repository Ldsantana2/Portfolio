import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import {ProjectCard} from './components/ProjectCard';
import {Contact} from './components/Contact';

import projectsData from './data/projects.json';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-zinc-50 font-sans selection:bg-green-500/30">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pt-6 pb-18 space-y-16">
                <Hero />
                <section
                    id="projects"
                    className="border-t border-fuchsia-600 pt-16 space-y-12"
                >
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold font-mono tracking-tight text-fuchsia-600">
                            Projetos:
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                index={index}
                                title={project.title}
                                description={project.description}
                                techs={project.techs}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>

                <Contact />
            </main>

            <footer className="bg-slate-900 py-6 text-center text-xs font-mono text-fuchsia-600">
                <p>Criado por Lucas Dantas &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}
