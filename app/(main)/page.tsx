import { currentUser } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import LandingNavbar from "./_components/landing-navbar";
import { Footer } from "../../components/footer/footer";
import StatBanner from "./_components/_stats/stat-banner";
import FeatureBanner from "./_components/_feature/feature-banner";
import About from "./_components/_about/about";
import Setup from "./_components/_setup/setup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Contact from "./_components/contact";
import { cn } from "@/lib/utils";
import DividerOne from "./_components/_dividers/divider-one";
import DividerTwo from "./_components/_dividers/divider-two";
import DividerThree from "./_components/_dividers/divider_three";
import CategoryBar from "@/components/navigation/category-bar";
import Image from "next/image";
import FilterBar from "@/components/navigation/filterbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LandingPage = async () => {
  const user = (await currentUser()) || null;
  return (
    <div className=" w-full min-h-screen h-auto flex flex-col justify-between  ">
      <LandingNavbar />
      
      <section className="relative w-full pt-[10rem]">
        <div className="relative  h-auto w-full bg-[url(/testbg.png)]  bg-no-repeat bg-cover bg-scroll bg-center ">
          <DividerTwo />
          <div className="h-auto w-full bg-slate-800/60  flex flex-col px-20  justify-center pb-10">
            <div className="w-full h-full mt-5 p-5 bg-slate-200/90 rounded-md z-10 flex items-center flex-col gap-3 px-20 pt-20 pb-20">
              <h2
                className={cn(
                  "font-bold tracking-tight text-slate-900 text-4xl",
                  font.className
                )}
              >
                Click something below!
              </h2>
              <article className="flex items-center gap-5 justify-between">
                <div className="grid grid-cols-3 gap-1">
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="w-full h-full bg-zinc-200 rounded-md shadow-md p-3">
                    <h2> Product</h2>
                    <Image
                      src="/landing/setup1.webp"
                      alt="product"
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <DividerThree />
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default LandingPage;
