import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
interface AboutFlatProps {
  icon:JSX.Element;
  title:string;
  description:string;
  className:string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AboutFlat = ({
  icon,
  title,
  description,
  className,
}:AboutFlatProps) => {
  return (
<section className="flex md:flex-row flex-col items-center w-full  lg:w-[30%]  rounded-md p-2 gap-5">
          <article className={className}>
            <div className="bg-slate-800/20 min-h-[100%]">
              <div className="w-full h-full bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20 py-5  rounded-md p-2">
                <div className="flex items-center gap-5">
                  {icon}
                  <h3 className={cn("font-bold tracking-tight text-white text-xl",font.className)}>{title}</h3>
                </div>
                <p className="text-white font-semibold font-sans">
                  {description}
                </p>
              </div>
            </div>
          </article>
        </section>
  );
}
export default AboutFlat;