import { useState } from "react";
import MenuHeader from "../../components/menuHeader.jsx";

const steps = [
    { key: "fullname", label: "Full Name", type: "text", autoComplete: "name" },
    { key: "username", label: "Username", type: "text", autoComplete: "username" },
    { key: "email", label: "Email", type: "email", autoComplete: "email" },
    { key: "password", label: "Password", type: "password", autoComplete: "new-password" },
];

export default function SignUp() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
    });
    const [isRegistered, setIsRegistered] = useState(false);
    const step = steps[currentStep];

    let formContent;

    if (isRegistered) {
        formContent = (
            <p role="status" className="mt-6 text-center text-gray-700">
                Formulário concluído. O cadastro ainda não está conectado a um serviço.
            </p>
        );
    } else {
        let minLength;
        if (step.key === "password") {
            minLength = 8;
        }

        let usernameHelpText;
        if (step.key === "username") {
            usernameHelpText = (
                <p className="mt-2 text-sm text-gray-600">
                    Neste protótipo, o username ainda não será salvo.
                </p>
            );
        }

        let passwordHelpText;
        if (step.key === "password") {
            passwordHelpText = (
                <p className="mt-2 text-sm text-gray-600">
                    A senha deve ter pelo menos 8 caracteres.
                </p>
            );
        }

        let backButton;
        if (currentStep > 0) {
            backButton = (
                <button
                    className="w-1/3 rounded border border-gray-300 p-2 hover:bg-gray-100"
                    onClick={() => {
                        setCurrentStep((previousStep) => previousStep - 1);
                    }}
                    type="button"
                >
                    Voltar
                </button>
            );
        }

        let submitLabel;
        if (currentStep === steps.length - 1) {
            submitLabel = "Finalizar";
        } else {
            submitLabel = "Continuar";
        }

        formContent = (
            <>
                <p className="mb-6 text-center text-gray-600" aria-live="polite">
                    Etapa {currentStep + 1} de {steps.length}
                </p>

                <div
                    className="mb-6 h-2 overflow-hidden rounded bg-gray-200"
                    role="progressbar"
                    aria-label="Progresso do cadastro"
                    aria-valuemin={1}
                    aria-valuemax={steps.length}
                    aria-valuenow={currentStep + 1}
                >
                    <div
                        className="h-full bg-blue-600 transition-all"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor={step.key}
                        className="mb-2 block font-semibold text-gray-700"
                    >
                        {step.label}
                    </label>
                    <input
                        autoComplete={step.autoComplete}
                        autoFocus
                        className="w-full rounded border border-gray-300 p-2"
                        id={step.key}
                        name={step.key}
                        onChange={(event) => {
                            setFormData((previousData) => ({
                                ...previousData,
                                [step.key]: event.target.value,
                            }));
                        }}
                        required
                        type={step.type}
                        value={formData[step.key]}
                        minLength={minLength}
                    />
                    {usernameHelpText}
                    {passwordHelpText}
                </div>

                <div className="flex gap-3">
                    {backButton}
                    <button
                        className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                        type="submit"
                    >
                        {submitLabel}
                    </button>
                </div>
            </>
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (currentStep < steps.length - 1) {
            setCurrentStep((previousStep) => previousStep + 1);
            return;
        }

        setIsRegistered(true);
    }

    return (
        <>
            <MenuHeader />

            <main className="flex flex-col items-center p-3">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md rounded bg-white p-8 shadow-md"
                >
                    <h1 className="mb-2 text-center text-4xl font-bold">Sign Up</h1>
                    {formContent}
                </form>
            </main>
        </>
    );
}
