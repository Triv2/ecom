import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface StatProps {
  title: string;
  description: string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Stat = ({ title, description }: StatProps) => {
  return (
    <article className="bg-gradient-to-b from-sky-500 to-slate-200 pl-2 flex flex-col ">
      <div className="flex flex-col justify-center pl-5 w-full h-full bg-white gap-1">
        <h3
          className={cn(
            "font-bold text-slate-800 tracking-tight text-4xl",
            font.className
          )}
        >
          {title}
        </h3>
        <p className="text-muted-foreground pl-1">{description}</p>
      </div>
    </article>
  );
};
export default Stat;
