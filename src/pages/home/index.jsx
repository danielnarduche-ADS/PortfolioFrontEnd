import MenuHeader from "../../components/menuHeader.jsx";
import project1 from "../../assets/images/project1.png";
import shortcut from "../../assets/icons/shortcut.png";
import experience from "../../assets/icons/experience.png";
import javaScript from "../../assets/icons/javaScript.png";
import nodeJs from "../../assets/icons/node-js.png";
import css from "../../assets/icons/css.png";
import aboutMe from "../../assets/icons/aboutMe.png";


export default function Home() {
  return (
    <>
        <MenuHeader />

        <main className="flex flex-col grow">

        <div className="flex flex-col items-center justify-center text-center min-h-dvh gap-3">
            <h2 className="text-3xl">Welcome to My Portfolio</h2>
            <p>A new world of possibilities</p>

            <nav>
                <ul className="flex gap-5">
                    <li><a href="https://github.com/danielnarduche-ADS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/daniel-narduche-90235b3b5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a></li>
                </ul>
            </nav>
        </div>



        <section className="projectSection flex flex-col items-center gap-10 px-6 py-24 scroll-snap-align" id="projects">
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Projects</p>
                <h2 className="text-4xl font-bold text-slate-900">SpotLights</h2>
                <span className="h-1 w-16 rounded-full bg-blue-600" aria-hidden="true"></span>
            </div>

            <div className="flex w-full justify-center">
                <article className="group w-full max-w-xs overflow-hidden rounded-2xl border border-sky-200 bg-white text-left shadow-lg shadow-sky-900/10 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/15">
                    <div className="relative aspect-2/1 overflow-hidden bg-sky-900">
                        <img src={project1} alt="Weather forecast application interface"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <span
                            className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                            Featured project
                        </span>
                    </div>

                    <div className="flex flex-col gap-5 p-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Web application</p>
                            <a href="#" target="_self">
                                <h3 className="text-2xl font-bold text-slate-900">Weather Project</h3>
                            </a>
                            <p className="leading-relaxed text-slate-600">
                                A weather application that presents current conditions in a clear, easy-to-use interface.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2" aria-label="Project categories">
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">Weather</span>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">Dashboard</span>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">UI Design</span>
                        </div>

                        <div className="flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-medium text-slate-500 justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
                                <span>Weather project</span>
                            </div>
                            <a href="https://danielnarduche-ads.github.io/project-1/"  target="_blank" rel="noopener noreferrer">
                                <img src={shortcut} alt="Open the Weather Project in a new tab" className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>


        <section>
            <article className="articlesConfig rounded-3xl border border-sky-200/70 bg-white/50 shadow-lg shadow-sky-900/5">
                <div className="max-w-6xl mx-auto px-4 mt-10 w-full flex flex-col gap-6 text-center md:text-left">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Introduction</p>
                        <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
                        <span className="h-1 w-12 rounded-full bg-blue-600" aria-hidden="true"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-auto p-12 mx-auto flex items-center justify-center rounded-3xl border border-sky-200/70 bg-linear-to-br from-white to-sky-100 shadow-inner">
                            <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500/70" aria-hidden="true"></span>
                            <img src={aboutMe} alt="About me" className="w-52 h-52 object-contain" />
                        </div>
                        <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                            <p>
                                My name is Daniel Narduche, and I am a 17-year-old self-taught student passionate about technology and programming. I am always looking for new challenges that help me grow. I enjoy building projects that let me apply my skills and learn along the way. In my free time, I explore new technologies, read about programming, and take part in software development communities.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="articlesConfig bg-zinc-900 text-white">
                <div className="flex flex-col gap-6 text-center md:text-left max-w-6xl mx-auto px-4 mt-10">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300">Stack</p>
                        <h3 className="text-3xl font-bold text-white">Technologies</h3>
                        <span className="h-1 w-12 rounded-full bg-blue-500" aria-hidden="true"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full max-w-72 h-52 mx-auto md:mx-0 flex items-center justify-center">
                            <div
                                className="absolute left-0 top-6 w-28 h-28 z-0 transform -rotate-6 transition-transform hover:scale-105">
                                <img src={javaScript} alt="JavaScript"
                                    className="w-full h-full object-contain" />
                            </div>
                            <div
                                className="absolute z-20 w-32 h-32 shadow-2xl rounded-full flex items-center justify-center bg-zinc-900/50 p-2 transition-transform hover:scale-110">
                                <img src={nodeJs} alt="Node.js"
                                    className="w-full h-full object-contain" />
                            </div>
                            <div
                                className="absolute right-0 bottom-6 w-28 h-28 z-10 transform rotate-6 transition-transform hover:scale-105">
                                <img src={css} alt="CSS" className="w-full h-full object-contain" />
                            </div>

                        </div>
                        <div className="text-gray-300 leading-relaxed text-base md:text-lg">
                            <p>
                                I work with a range of technologies. On the frontend, I focus on React and Tailwind CSS; on the backend, I work with Node.js, Express.js, SQLite, Better Auth, CASL, and AJV. I also use Git and GitHub for version control, collaboration, and managing code changes.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="articlesConfig rounded-3xl border border-sky-200/70 bg-white/50 shadow-lg shadow-sky-900/5">
                <div className="max-w-6xl mx-auto px-4 mt-10 w-full flex flex-col gap-6 text-center md:text-left">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">My Journey</p>
                        <h3 className="text-3xl font-bold text-slate-900">Experience</h3>
                        <span className="h-1 w-12 rounded-full bg-blue-600" aria-hidden="true"></span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-auto p-12 mx-auto flex items-center justify-center rounded-3xl border border-sky-200/70 bg-linear-to-br from-white to-sky-100 shadow-inner">
                            <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500/70" aria-hidden="true"></span>
                            <img src={experience} alt="Experience Example Icon" className="w-52 h-52 object-contain" />
                        </div>
                        <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                            <p>
                                I have several years of experience programming in high-level languages such as Python and Lua, as well as one year of experience in web development. I am available for freelance work, including projects for international clients. I value clean, efficient, and maintainable code, and my experience with different frameworks and libraries helps me adapt quickly to new technologies and tools.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <footer className="bg-zinc-900 text-white" id="bottom">
        <p>&copy; 2026 DansVelopment</p>
    </footer>
    </>
  );
}
