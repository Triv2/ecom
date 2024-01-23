import {
  BarChart3,
  Brush,
  Cast,
  Combine,
  Feather,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import AboutCard from "./about_card";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import AboutFlat from "./about_flat";
interface AboutProps {}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  return (
    <div className="w-full h-full p-5 flex items-center flex-col gap-3 pt-20 pb-20">
      <h2
        className={cn(
          "font-bold tracking-tight text-white text-4xl",
          font.className
        )}
      >
        How It Works
      </h2>

      <div className="flex items-center flex-wrap lg:flex-row flex-col justify-center sm:p-5">
        <AboutCard
          title="Store Designer"
          className="bg-[url(/landing/gif2.gif)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md"
          description="We have an in-built store designer that simplifies and speeds up
        the process of building an online e-commerce store."
          icon={
            <Brush className="text-red-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
          }
        />
        <AboutCard
          title="Content Management System"
          className="bg-[url(/landing/gif1.gif)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md"
          description="We provide you with a simple and easy to use content management
        system to build your products and design your store."
          icon={
            <Combine className="text-orange-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
          }
        />
        <AboutCard
          title="Analytics"
          className="bg-[url(/landing/gif3.gif)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md"
          description="Data analytics are embedded into the foundation of the system
        allowing you to track the performance of your business."
          icon={
            <BarChart3 className="text-orange-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
          }
        />

        <AboutFlat
          title="Branding"
          className="bg-[url(/landing/work2.webp)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center  rounded-lg shadow-md"
          description="Build your custom brand for your products and share it with
        the world."
          icon={
            <Feather className="text-green-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
          }
        />
        <AboutFlat
          title="Marketing"
          className="bg-[url(/landing/work3.webp)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center  rounded-lg shadow-md"
          description="Our integrated systems will promote your products and business
        to our network."
          icon={
            <Cast className="text-blue-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
          }
        />
      </div>
    </div>
  );
};
export default About;
