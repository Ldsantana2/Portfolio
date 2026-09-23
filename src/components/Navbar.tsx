export function Navbar() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900 border-b border-zinc-800/80">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-mono font-bold text-fuchsia-600 tracking-tight">
                    &lt;LD.Dev /&gt;
                </span>
                <nav className="flex items-center gap-6 text-sm font-medium text-fuchsia-600">
                    <a
                        href="#about"
                        className="hover:text-fuchsia-50 transition-colors"
                    >
                        Sobre
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-fuchsia-50 transition-colors"
                    >
                        Projetos
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-fuchsia-50 transition-colors"
                    >
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
}
