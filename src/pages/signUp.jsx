import MenuHeader from "../components/menuHeader";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { z } from "zod";

const passwordSchema = z
    .object({
        password: z.string(),
        confirmPassword: z.string(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não coincidem.",
        path: ["confirmPassword"],
    });

export default function SignUp() {
    const shouldReduceMotion = useReducedMotion();
    const [passwordError, setPasswordError] = useState("");

    function handleSubmit(event) {
        const formData = new FormData(event.currentTarget);
        const result = passwordSchema.safeParse({
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        });

        if (!result.success) {
            event.preventDefault();
            setPasswordError(result.error.issues[0].message);
            return;
        }

        setPasswordError("");
    }

    return (
        <>
            <MenuHeader />

            <main className="flex min-h-[calc(100dvh-5rem)] items-center justify-center px-4 py-6">
                <motion.section
                    className="w-full max-w-md p-1 text-center"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
                >
                    <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">SignUp</h1>
                    <p className="mt-1 text-sm text-slate-600">Dados de contato</p>

                    <form action="/enviar" method="post" className="mt-10" onSubmit={handleSubmit}>
                        <fieldset className="flex w-full flex-col gap-10 text-left">
                            <legend className="sr-only">Dados de contato</legend>
                            <div className="border-b-2 border-gray-300 transition-colors duration-200 focus-within:border-blue-600 motion-reduce:transition-none">
                                <label htmlFor="nome" className="sr-only">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Key your name"
                                    required
                                    className="w-full bg-transparent px-1 py-2 text-slate-900 outline-none placeholder:text-slate-500"
                                />
                            </div>
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
                                <label htmlFor="password" className="sr-only">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Key your password"
                                    required
                                    onChange={() => setPasswordError("")}
                                    className="w-full bg-transparent px-1 py-2 text-slate-900 outline-none placeholder:text-slate-500"
                                />
                            </div>
                            <div>
                                <div className="border-b-2 border-gray-300 transition-colors duration-200 focus-within:border-blue-600 motion-reduce:transition-none">
                                    <label htmlFor="confirmPassword" className="sr-only">Confirmar senha</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        required
                                        aria-invalid={Boolean(passwordError)}
                                        aria-describedby={passwordError ? "confirmPassword-error" : undefined}
                                        onChange={() => setPasswordError("")}
                                        className="w-full bg-transparent px-1 py-2 text-slate-900 outline-none placeholder:text-slate-500"
                                    />
                                </div>
                                {passwordError && (
                                    <p id="confirmPassword-error" role="alert" className="mt-2 text-sm text-red-600">
                                            {passwordError}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center justify-between px-1 py-1">
                                <span className="text-sm font-medium text-slate-600">Assunto</span>
                                <p className="text-sm font-semibold text-blue-700">Dúvida</p>
                            </div>
                            </fieldset>
                            <motion.button
                                type="submit"
                                className="mt-5 w-full bg-blue-600 p-2.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 active:scale-[0.98] motion-reduce:transition-none"
                                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                            >
                                Enviar
                            </motion.button>
                    </form>
                </motion.section>
            </main>
        </>
    )
}
