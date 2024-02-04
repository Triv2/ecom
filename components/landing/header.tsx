import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
interface HeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
// const headingFont=localFont({
//   src:"",
// });

const Header = ({ title, description, imageUrl }: HeaderProps) => {
  return (
    <div className="relative  w-full h-full overflow-hidden  xl:overflow-visible rounded-md">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className={cn("text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", font.className)}>
              {title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {description}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100  border shadow-2xl">
                        <Image
                        height={150}
                        width={150}
                          src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center "
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl border">
                        <Image
                        height={150}
                        width={150}
                        src={imageUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-gradient-to-b from-sky-500 to-blue-600 shadow-2xl px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
