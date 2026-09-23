import foto from '../assets/Foto.png';

export function Hero() {
    return (
        <section id="about" className="space-y-3 pt-12 max-w-3xl">
            <img
                src={foto}
                alt="Foto de Lucas Dantas"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-fuchsia-800 my-4"
            />
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-linear-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Lucas Dantas
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-400">
                Typescript | C# | .NET | React | Angular
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
                Engenheiro de Software especializado em desenvolvimento de
                soluções escaláveis utilizando Computação em Nuvem e
                Inteligência Artificial.
            </p>
        </section>
    );
}
