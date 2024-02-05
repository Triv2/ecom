import AnimationOnScroll from "@/components/animation-on-scroll";
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
    <article className="bg-gradient-to-b from-blue-600 via-sky-500 to-slate-200 pl-2 flex flex-col w-full h-full rounded-md">
      <div className="flex flex-col justify-center pl-5 w-full h-full bg-white gap-1">
        <AnimationOnScroll
        classNameInView="animate-fade-up animate-once animate-ease-out animate-fill-forwards"
        classNameNotInView=""
        >
        <h3
          className={cn(
            "font-bold text-slate-800 tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-7xl ",
            font.className
          )}
        >
          {title}
        </h3>
        </AnimationOnScroll>
        <p className="text-muted-foreground text-xl pl-1">{description}</p>
      </div>
    </article>
  );
};
export default Stat;
