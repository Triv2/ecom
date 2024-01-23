import { BarChart3, Brush, Cast, Combine, Feather, LineChart } from "lucide-react";
import Image from "next/image";

interface AboutProps {}

const About = () => {
  return (
    <div className="w-full h-full p-5 flex items-center flex-col gap-3 pt-20 pb-20">
      <h2 className="font-bold text-white text-4xl">How It Works</h2>

      <div className="flex items-center flex-wrap lg:flex-row flex-col justify-center sm:p-5">
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/gif2.gif)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md">
            <div className=" min-h-[100%] rounded-md bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20">
              <div className="w-full  flex gap-5 items-center bg-slate-800/90  shadow-md  px-4 rounded-t-md p-2">
              <Brush className="text-red-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
                <h3 className="font-bold text-white text-xl">Store Designer</h3>
                
              </div>
              <div className="min-h-[100px] min-w-[100px] bg-slate-500/20 "></div>
              <p className="text-white font-semibold bg-slate-500/20  text-xl font-sans p-2 py-10">
                We have an in-built store designer that simplifies and speeds up
                the process of building an online e-commerce store.
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/gif1.gif)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md">
            <div className="bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20 min-h-[100%] rounded-md">
              <div className="w-full flex gap-5 items-center px-4 bg-slate-800/90 shadow-md  rounded-t-md p-2">
                <Combine className="text-orange-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
                <h3 className="font-bold text-white text-xl">
                  Content Management System
                </h3>
              </div>
              <div className="min-h-[100px] min-w-[100px] bg-slate-500/20 "></div>
              <p className="text-white font-semibold bg-slate-500/20 text-xl font-sans p-2 py-10">
                We provide you with a simple and easy to use content management
                system to build your products and design your store.
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/gif3.gif)]  h-full w-full bg-no-repeat bg-cover bg-scroll bg-center rounded-lg shadow-md">
            <div className="bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20 min-h-[100%] rounded-md ">
              <div className="w-full  flex gap-5 items-center bg-slate-800/90 shadow-md  rounded-t-md p-2 px-4">
                <BarChart3 className="text-yellow-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
                <h3 className="font-bold text-white text-xl">Analytics</h3>
              </div>
              <div className="min-h-[100px] min-w-[100px] bg-slate-500/20 "></div>
              <p className="text-white font-semibold bg-slate-500/20 text-xl font-sans p-2 py-10">
                Data analytics are embedded into the foundation of the system
                allowing you to track the performance of your business.
              </p>
            </div>
          </article>
        </section>

        





        <section className="flex md:flex-row flex-col items-center w-full  lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/work2.webp)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center  rounded-lg shadow-md">
            <div className="bg-slate-800/20 min-h-[100%]">
              <div className="w-full h-full bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20 py-5  rounded-md p-2">
                <div className="flex items-center gap-5">
                  <Feather className="text-green-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
                  <h3 className="font-bold text-white text-xl">Branding</h3>
                </div>
                <p className="text-white font-semibold font-sans">
                  Build your custom brand for your products and share it with
                  the world.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="flex md:flex-row flex-col items-center  rounded-md p-2 gap-5 w-full lg:w-[30%] ">
          <article className="bg-[url(/landing/work3.webp)]  h-full w-full  bg-no-repeat bg-cover bg-scroll bg-center  rounded-lg shadow-md">
            <div className="bg-slate-800/20 min-h-[100%]">
              <div className="w-full h-full bg-gradient-to-br from-slate-400/20 via-slate-800/30 to-slate-400/20 py-5  rounded-md p-2">
                <div className="flex items-center gap-5">
                  <Cast className="text-blue-400 bg-slate-700/50 rounded-md p-2 h-11 w-11" />
                  <h3 className="font-bold text-white text-xl">Marketing </h3>
                </div>
                <p className="text-white font-semibold font-sans">
                  Our integrated systems will promote your products and business
                  to our network.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
export default About;
