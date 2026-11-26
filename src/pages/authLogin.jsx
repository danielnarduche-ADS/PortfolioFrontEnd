import MenuHeader from "../components/menuHeader";
import { motion, useReducedMotion } from "motion/react";

export default function AuthorizationLogin() {
    const shouldReduceMotion = useReducedMotion();

    async function handleSubmit(event) {
        const formData = new FormData(event)
    }
    
    return (
        <>
            <MenuHeader />

            <main className="flex min-h-[calc(100dvh-5rem)] justify-center px-4 py-6">
                <motion.section
                    className="w-full max-w-md p-1 text-center"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
                >
                    <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">LogIn</h1>
                    <p className="mt-1 text-sm text-slate-600">Sign in to your account</p>

                    <form action="/auth-login" method="post" className="mt-10" onSubmit={handleSubmit}>
                        <fieldset className="flex w-full flex-col gap-10 text-left">
                            <legend className="sr-only">Sign-in details</legend>
                            <div className="border-b-2 border-gray-300 transition-colors duration-200 focus-within:border-blue-600 motion-reduce:transition-none">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Key your email"
                                    required
                                    className="w-full bg-transparent px-1 py-2 text-slate-900 outline-none placeholder:text-slate-500"
                                />
                            </div>
                            <div className="border-b-2 border-gray-300 transition-colors duration-200 focus-within:border-blue-600 motion-reduce:transition-none">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Key your password"
                                    required
                                    className="w-full bg-transparent px-1 py-2 text-slate-900 outline-none placeholder:text-slate-500"
                                />
                            </div>
                            <div className="flex items-center justify-between px-1 py-1">
                                <span className="text-sm font-medium text-slate-600">Subject</span>
                                <p className="text-sm font-semibold text-blue-700">Question</p>
                            </div>
                            </fieldset>
                            <motion.button
                                type="submit"
                                className="mt-5 w-full bg-blue-600 p-2.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 active:scale-[0.98] motion-reduce:transition-none"
                                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                            >
                                Submit
                            </motion.button>
                    </form>
                </motion.section>
            </main>
        </>
    )
}
