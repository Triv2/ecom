import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
interface SetupCardProps{
  title:string;
  subtitle:string;
  description:string;
  imageUrl:string;
  href:string;
  link:string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

const SetupCard = ({
  title,
  href,
  subtitle,
  description,
  imageUrl,
  link,
}:SetupCardProps) => {
  return (
<article className="bg-slate-400/10 rounded-md h-auto w-auto p-2 flex items-center justify-evenly flex-col border border-sky-800/30 shadow-md min-w-[30%]">
          <div className="flex sm:flex-row  flex-col  sm:justify-start gap-3 p-2 w-full">
            <Image
              src={imageUrl}
              width={150}
              height={150}
              alt={imageUrl}
              className="rounded-md"
            />
            <div className="flex flex-col  justify-evenly">
              <h4 className={cn("font-bold text-slate-800  tracking-tight text-2xl", font.className)}>{title}</h4>
              <h5>{subtitle}</h5>

              <p className="text-muted-foreground">
                {description}
              </p>
              <Link
                href={href}
                className="text-sky-600 hover:text-sky-400 hover:underline mt-2"
              >
                {link}
              </Link>
            </div>
          </div>
        </article>
  );
}
export default SetupCard;