import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp appearance={{
    elements: {
      formButtonPrimary:
        "bg-blue-600/80 hover:bg-blue-500/80 text-lg normal-case",
        card: "bg-slate-800 border border-sky-400 shadow-lg",
        socialButtons: "bg-sky-500 hover:bg-sky-400  rounded-md text-white",
        headerTitle:"font-bold text-3xl text-sky-400",
        headerSubtitle:"text-slate-200/80",
        dividerLine:"bg-sky-400",
        dividerText:"text-sky-400",
        formFieldLabel:"text-sky-400",
        footerActionText: "text-sky-400",
        formFieldInput:"bg-slate-400/50 text-sky-300",
        footerActionLink:"text-slate-200/80",
        formFieldInfoText: "text-sky-400",
        socialButtonsBlockButtonText: "text-white text-lg font-bold",
    },
  }} />;
}