import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import NavActions from "@/components/navigation/nav-actions";
import MobileNavbar from "@/components/navigation/mobile-navbar";
import { Searchbar } from "@/components/navigation/searchbar";
import CategoryBar from "@/components/navigation/category-bar";
import FilterBar from "@/components/navigation/filterbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = async () => {
  const user = (await currentUser()) || null;

  return (
    <div className=" fixed w-full z-50">
    <nav className="w-full h-[50px] flex items-center justify-between px-2 z-50 bg-gradient-to-b from-neutral-700 to-slate-900 shadow-xl ">
      {!user ? (
        <Link className="flex items-center justify-center sm:gap-1" href="/">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <p
            className={cn(
              "font-bold text-md md:text-xl tracking-tight font-sans bg-gradient-to-br from-blue-500 sm:block hidden to-emerald-300 bg-clip-text text-transparent",
              font.className
            )}
          >
            Simple E-C
          </p>
        </Link>
      ) : (
        <Link
          className="flex items-center justify-center gap-1"
          href="/dashboard"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <p
            className={cn(
              "font-bold text-md md:text-xl font-sans bg-gradient-to-r from-sky-500  to-slate-300 bg-clip-text text-transparent",
              font.className
            )}
          >
            Simple E-C
          </p>
        </Link>
      )}
<Searchbar/>
      {!user ? (
        <div >
          <section className="sm:flex  hidden z-10">
        <NavActions/>
        </section>
        <section className="flex sm:hidden">
        <MobileNavbar/>
        </section>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center w-full gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverCard: "pointer-events-auto",
                  userButtonAvatarBox: "h-6 w-6",
                },
              }}
            />
          </div>
        </div>
      )}
     
    </nav>
   
    </div>
  );
};
export default Navbar;
