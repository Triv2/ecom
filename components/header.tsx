import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
interface HeaderProps {
  title:string;
  description:string;
  imageUrl:string;
}

// const headingFont=localFont({
//   src:"",
// });


const Header = ({
  title,
  description,
  imageUrl,
}:HeaderProps) => {
  return (
<div className=" flex flex-col md:flex-row items-center justify-center w-full h-auto px-10 py-4 pl-10 pt-14  bg-slate-900/80">
  <Image src={imageUrl} alt={imageUrl} width={250} height={250} className="opacity-90 md:w-[15%]"/>
  <div className="flex justify-center  flex-col gap-2 md:w-[40%] p-2">
  <h1 className={cn("text-3xl md:text-6xl tracking-widest text-center text-emerald-400 sm:text-start font-bold",
  //headingFont.className
  )}>{title}</h1>
    <p className="text-lg text-purple-400 pl-2">{description}</p>
  </div>

</div>
  );
}
export default Header;