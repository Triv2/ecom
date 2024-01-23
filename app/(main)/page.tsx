import { currentUser } from "@clerk/nextjs";

import LandingNavbar from "./_components/landing-navbar";
import { Footer } from "../../components/footer/footer";
import StatBanner from "./_components/stat-banner";
import FeatureBanner from "./_components/feature-banner";
import About from "./_components/about";
import Setup from "./_components/setup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Contact from "./_components/contact";

const LandingPage = async () => {
  const user = (await currentUser()) || null;
  return (
    <div className=" w-full min-h-screen h-auto flex flex-col justify-between  ">
      <LandingNavbar />

      <section className="relative  w-full     ">
        <div className="relative  h-[550px]  w-full bg-[url(/landing/lbg.png)]  bg-no-repeat bg-cover bg-fixed bg-center pt-10">
          <div className="h-full w-full bg-slate-800/60  flex flex-col px-2 md:pl-20 justify-center pb-10">
            <div className=" w-full ">
              <h1
                className=" text-5xl  font-bold  sm:text-6xl lg:7xl xl:text-8xl  
            bg-gradient-to-br from-blue-500/80 md:text-start text-center to-emerald-200/90 bg-clip-text text-transparent drop-shadow-2xl"
              >
                Simple E-Commerce
              </h1>
            </div>
            
            <h3 className=" pl-5 text-xl sm:text-2xl md:text-start text-center font-serif font-semibold text-sky-100">
              An easy to use e-commerce platform to suit all small business
              needs
            </h3>
            <div className="md:pl-20 pt-5">
            <Button size="lg" asChild>
              <Link className="text-xl bg-gradient-to-br from-blue-500 via-sky-300/50 md:text-start font-bold  z-10
              text-center to-emerald-200/70   drop-shadow-2xl hover:scale-105 transition-all " href="/sign-up">
                Get Started for Free <ArrowRight className=""/>
              </Link>
           </Button>
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1705848015 ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill scale-105"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <div className="h-full w-full py-2">
        <StatBanner />
      </div>
      <div className="h-full w-full pb-10">
        <FeatureBanner />
      </div>
      <section className="relative w-full">
        <div className="relative  h-auto  w-full bg-[url(/landing/lbg.png)]  bg-no-repeat bg-cover bg-fixed bg-center ">
          <div className="custom-shape-divider-top-1705935417">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill scale-105"
              ></path>
            </svg>
          </div>

          <div className="h-full w-full bg-slate-800/60  flex flex-col px-2  justify-center pb-10">
            <About/>
          </div>
          <div className="custom-shape-divider-bottom-1705848015 ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill scale-105"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className=" h-full w-full">
        <Setup />
      </div>
      <div className=" h-full w-full px-3 md:p-10 pb-10 "><Contact/></div>

      <Footer />
    </div>
  );
};
export default LandingPage;
