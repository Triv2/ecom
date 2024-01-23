import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface AboutCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  className: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AboutCard = ({ icon, title, description, className }: AboutCardProps) => {
  return (
    <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
      <article className={className}>
        <div className=" min-h-[100%] rounded-md bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20">
          <div className="w-full  flex gap-5 items-center bg-slate-900/70    px-4 rounded-t-md p-2">
            {icon}
            <h3
              className={cn(
                "font-bold tracking-tight text-white text-xl",
                font.className
              )}
            >
              {title}
            </h3>
          </div>
          <div className="min-h-[100px] min-w-[100px] bg-slate-900/70  "></div>
          <p className="text-white font-semibold bg-slate-900/70  rounded-b-md text-xl font-sans p-2  px-4 py-10">
            {description}
          </p>
        </div>
      </article>
    </section>
  );
};
export default AboutCard;
