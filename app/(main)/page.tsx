import { currentUser } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import LandingNavbar from "./_components/landing-navbar";
import { Footer } from "../../components/footer/footer";

import { cn } from "@/lib/utils";

import DividerThree from "./_components/_dividers/divider_three";

import { ProductQuickView } from "@/components/product/product-quickview";
import { ProductFeatures } from "@/components/product/product-features";
import Header from "@/components/landing/header";
import ProductList from "@/components/product/product-list";
import { CategoryList } from "@/components/categories/category-list";
import { Categories } from "@/components/categories/categories";
import { Incentives } from "@/components/landing/incentives";
import { Promo } from "@/components/landing/promo";
import { Navbar } from "@/components/navigation/navbar/navbar";


const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LandingPage = async () => {
  const user = (await currentUser()) || null;
  return (
    <div className=" w-full min-h-screen h-auto flex flex-col justify-between  ">
      <Navbar />

      <section className="relative w-full ">
        <div className="h-auto w-full bg-gradient-to-tr from-sky-100/10  to-blue-100/10 pt-[2rem]  md:pt-[5rem] flex flex-col px-2 sm:px-10 md:px-20  justify-center pb-10">
          <h2
            className={cn(
              "font-bold tracking-tight text-slate-900 text-4xl",
              font.className
            )}
          >
            Sale Banner
          </h2>

          <div className="flex items-center flex-col  w-full">
            <Header
              title="Spring is here!"
              description="This year, our new spring collection will shelter you from the harsh elements of a world. 
                  A world that should be a better place for you. Help us help you make it so."
              imageUrl="/landing/work1.webp"
            />
            <div className="flex flex-col md:flew-row items-center justify-center">
            <ProductList title="Best Selling Products" />
            <CategoryList title="Browse our shop!"/>
            </div>
            <Incentives/>
            <Promo/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default LandingPage;
