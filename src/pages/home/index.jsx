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

        <main class="flex flex-col grow">

        <div class="flex flex-col items-center justify-center text-center min-h-dvh gap-3">
            <h2 class="text-3xl">Welcome to My Portfolio</h2>
            <p>A new world of possibilities</p>

            <nav>
                <ul class="flex gap-5">
                    <li><a href="https://github.com/danielnarduche-ADS" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/daniel-narduche-90235b3b5/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">LinkedIn</a></li>
                </ul>
            </nav>
        </div>



        <section class="projectSection flex flex-col items-center gap-10 px-6 py-24 scroll-snap-align" id="projects">
            <div class="flex flex-col items-center gap-2 text-center">
                <p class="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Projects</p>
                <h2 class="text-4xl font-bold text-slate-900">SpotLights</h2>
                <span class="h-1 w-16 rounded-full bg-blue-600" aria-hidden="true"></span>
            </div>

            <div class="flex w-full justify-center">
                <article class="group w-full max-w-xs overflow-hidden rounded-2xl border border-sky-200 bg-white text-left shadow-lg shadow-sky-900/10 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/15">
                    <div class="relative aspect-2/1 overflow-hidden bg-sky-900">
                        <img src={project1} alt="Weather forecast application interface"
                            class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <span
                            class="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                            Featured project
                        </span>
                    </div>

                    <div class="flex flex-col gap-5 p-6">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm font-semibold uppercase tracking-widest text-blue-600">Web application</p>
                            <a href="#" target="_self">
                                <h3 class="text-2xl font-bold text-slate-900">Weather Project</h3>
                            </a>
                            <p class="leading-relaxed text-slate-600">
                                A weather application that presents current conditions in a clear, easy-to-use interface.
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2" aria-label="Project categories">
                            <span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">Weather</span>
                            <span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">Dashboard</span>
                            <span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">UI Design</span>
                        </div>

                        <div class="flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-medium text-slate-500 justify-between">
                            <div class="flex items-center gap-2">
                                <span class="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
                                <span>Weather project</span>
                            </div>
                            <a href="https://danielnarduche-ads.github.io/project-1/"  target="_blank" rel="noopener noreferrer">
                                <img src={shortcut} alt="Open the Weather Project in a new tab" class="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>


        <section>
            <article class="articlesConfig rounded-3xl border border-sky-200/70 bg-white/50 shadow-lg shadow-sky-900/5">
                <div class="max-w-6xl mx-auto px-4 mt-10 w-full flex flex-col gap-6 text-center md:text-left">
                    <div class="flex flex-col items-center gap-2 md:items-start">
                        <p class="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Introduction</p>
                        <h2 class="text-3xl font-bold text-slate-900">About Me</h2>
                        <span class="h-1 w-12 rounded-full bg-blue-600" aria-hidden="true"></span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div class="relative w-full h-auto p-12 mx-auto flex items-center justify-center rounded-3xl border border-sky-200/70 bg-linear-to-br from-white to-sky-100 shadow-inner">
                            <span class="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500/70" aria-hidden="true"></span>
                            <img src={aboutMe} alt="About me" class="w-52 h-52 object-contain" />
                        </div>
                        <div class="text-gray-700 leading-relaxed text-base md:text-lg">
                            <p>
                                My name is Daniel Narduche, and I am a 17-year-old self-taught student passionate about technology and programming. I am always looking for new challenges that help me grow. I enjoy building projects that let me apply my skills and learn along the way. In my free time, I explore new technologies, read about programming, and take part in software development communities.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article class="articlesConfig bg-zinc-900 text-white">
                <div class="flex flex-col gap-6 text-center md:text-left max-w-6xl mx-auto px-4 mt-10">
                    <div class="flex flex-col items-center gap-2 md:items-start">
                        <p class="text-xs font-bold uppercase tracking-[0.25em] text-sky-300">Stack</p>
                        <h3 class="text-3xl font-bold text-white">Technologies</h3>
                        <span class="h-1 w-12 rounded-full bg-blue-500" aria-hidden="true"></span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div class="relative w-full max-w-72 h-52 mx-auto md:mx-0 flex items-center justify-center">
                            <div
                                class="absolute left-0 top-6 w-28 h-28 z-0 transform -rotate-6 transition-transform hover:scale-105">
                                <img src={javaScript} alt="JavaScript"
                                    class="w-full h-full object-contain" />
                            </div>
                            <div
                                class="absolute z-20 w-32 h-32 shadow-2xl rounded-full flex items-center justify-center bg-zinc-900/50 p-2 transition-transform hover:scale-110">
                                <img src={nodeJs} alt="Node.js"
                                    class="w-full h-full object-contain" />
                            </div>
                            <div
                                class="absolute right-0 bottom-6 w-28 h-28 z-10 transform rotate-6 transition-transform hover:scale-105">
                                <img src={css} alt="CSS" class="w-full h-full object-contain" />
                            </div>

                        </div>
                        <div class="text-gray-300 leading-relaxed text-base md:text-lg">
                            <p>
                                I work with a range of technologies. On the frontend, I focus on React and Tailwind CSS; on the backend, I work with Node.js, Express.js, SQLite, Better Auth, CASL, and AJV. I also use Git and GitHub for version control, collaboration, and managing code changes.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article class="articlesConfig rounded-3xl border border-sky-200/70 bg-white/50 shadow-lg shadow-sky-900/5">
                <div class="max-w-6xl mx-auto px-4 mt-10 w-full flex flex-col gap-6 text-center md:text-left">
                    <div class="flex flex-col items-center gap-2 md:items-start">
                        <p class="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">My Journey</p>
                        <h3 class="text-3xl font-bold text-slate-900">Experience</h3>
                        <span class="h-1 w-12 rounded-full bg-blue-600" aria-hidden="true"></span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div class="relative w-full h-auto p-12 mx-auto flex items-center justify-center rounded-3xl border border-sky-200/70 bg-linear-to-br from-white to-sky-100 shadow-inner">
                            <span class="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500/70" aria-hidden="true"></span>
                            <img src={experience} alt="Experience Example Icon" class="w-52 h-52 object-contain" />
                        </div>
                        <div class="text-gray-700 leading-relaxed text-base md:text-lg">
                            <p>
                                I have several years of experience programming in high-level languages such as Python and Lua, as well as one year of experience in web development. I am available for freelance work, including projects for international clients. I value clean, efficient, and maintainable code, and my experience with different frameworks and libraries helps me adapt quickly to new technologies and tools.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <footer class="bg-zinc-900 text-white" id="bottom">
        <p>&copy; 2026 DansVelopment</p>
    </footer>
    </>
  );
}
