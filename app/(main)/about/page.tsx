import { currentUser } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import LandingNavbar from "../_components/landing-navbar";
import { Footer } from "../../../components/footer/footer";
import StatBanner from "../_components/_stats/stat-banner";
import FeatureBanner from "../_components/_feature/feature-banner";
import About from "../_components/_about/about";
import Setup from "../_components/_setup/setup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Contact from "../_components/contact";
import { cn } from "@/lib/utils";
import DividerOne from "../_components/_dividers/divider-one";
import DividerTwo from "../_components/_dividers/divider-two";
import DividerThree from "../_components/_dividers/divider_three";
import Navbar from "../_components/navbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LandingPage = async () => {
  const user = (await currentUser()) || null;
  return (
    <div className=" w-full min-h-screen h-auto flex flex-col justify-between  ">
      <Navbar />
      <section className="relative  w-full     ">
        <div className="relative  h-[550px]  w-full bg-[url(/landing/lbg.png)]  bg-no-repeat bg-cover bg-fixed bg-center pt-10">
          <div className="h-full w-full bg-slate-800/60  flex flex-col px-2 md:pl-20 justify-center pb-10">
            <div className=" w-full ">
              <h1
                className={cn(
                  "text-5xl font-bold sm:text-6xl tracking-tight lg:7xl xl:text-8xl bg-gradient-to-br from-blue-500/80 md:text-start text-center to-emerald-200/90 bg-clip-text text-transparent drop-shadow-2xl",
                  font.className
                )}
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
                <Link
                  className={cn(
                    "text-xl bg-gradient-to-br from-blue-500 via-sky-300/50 md:text-start  z-10 text-center to-emerald-200/70  drop-shadow-2xl hover:scale-105 hover:text-sky-200 transition-all "
                  )}
                  href="/sign-up"
                >
                  <p className={cn(" tracking-tight", font.className)}>
                    {" "}
                    Get Started for Free
                  </p>{" "}
                  <ArrowRight className="" />
                </Link>
              </Button>
            </div>
          </div>
          <DividerOne />
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
          <DividerTwo />
          <div className="h-full w-full bg-slate-800/60  flex flex-col px-2  justify-center pb-10">
            <About />
          </div>
          <DividerThree />
        </div>
      </section>
      <div className=" h-full w-full">
        <Setup />
      </div>
      <div className=" h-full w-full px-3 md:p-10 pb-10 ">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
