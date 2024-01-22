import Image from "next/image";

interface AboutProps {}

const About = () => {
  return (
    <div className="w-full h-full p-5 flex items-center flex-col gap-3 pt-20 pb-20">
      <h2 className="font-bold text-white text-4xl">Platform Features</h2>

      <div className="flex items-center flex-wrap lg:flex-row flex-col justify-center sm:p-5">
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/work1.webp)] border h-full w-full border-slate-400/90 bg-no-repeat bg-cover bg-scroll bg-center rounded-md shadow-md">
            <div className="bg-slate-100/80 min-h-[100%] rounded-md">
              <div className="w-full flex flex-col bg-slate-800/90 py-5 shadow-md  rounded-t-md p-2">
                <h3 className="font-bold text-white text-xl">Store Designer</h3>
              </div>
              <p className="text-black font-semibold  text-xl font-sans p-2 py-10">
                We have an in-built store designer that simplifies and speeds up
                the process of building an online e-commerce store.
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/work2.webp)] border h-full w-full border-slate-400/90 bg-no-repeat bg-cover bg-scroll bg-center rounded-md shadow-md">
            <div className="bg-slate-100/80 min-h-[100%] rounded-md">
              <div className="w-full flex flex-col bg-slate-800/90 py-5 shadow-md  rounded-t-md p-2">
                <h3 className="font-bold text-white text-xl">
                  Content Management System
                </h3>
              </div>
              <p className="text-black font-semibold  text-xl font-sans p-2 py-10">
                We provide you with a simple and easy to use content management
                system to build your products and design your store.
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center  w-full lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/work3.webp)] border h-full w-full border-slate-400/90 bg-no-repeat bg-cover bg-scroll bg-center rounded-md shadow-md">
            <div className="bg-slate-100/80 min-h-[100%] rounded-md">
              <div className="w-full flex flex-col bg-slate-800/90 py-5 shadow-md  rounded-t-md p-2">
                <h3 className="font-bold text-white text-xl">Analytics</h3>
              </div>
              <p className="text-black font-semibold  text-xl font-sans p-2 py-10">
                Data analytics are embedded into the foundation of the system
                allowing you to track the performance of your business.{" "}
              </p>
            </div>
          </article>
        </section>

        <section className="flex md:flex-row flex-col items-center  lg:w-[30%]  rounded-md p-2 gap-5">
          <article className="bg-[url(/landing/work2.webp)] border h-full w-full border-slate-400/90 bg-no-repeat bg-cover bg-scroll bg-center  rounded-md shadow-md">
            <div className="bg-slate-800/20 min-h-[100%]">
              <div className="w-full h-full bg-slate-900/80 py-5  rounded-md p-2">
                <h3 className="font-bold text-white text-xl">Branding</h3>
                <p className="text-white/80 font-semibold font-sans">
                  Build your custom brand for your products and share it with
                  the world.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="flex md:flex-row flex-col items-center  rounded-md p-2 gap-5  lg:w-[30%] ">
          <article className="bg-[url(/landing/work3.webp)] border h-full w-full border-slate-400/90 bg-no-repeat bg-cover bg-scroll bg-center  rounded-md shadow-md">
            <div className="bg-slate-800/20 min-h-[100%]">
              <div className="w-full h-full bg-slate-900/80 py-5  rounded-md p-2">
                <h3 className="font-bold text-white text-xl">Marketing </h3>
                <p className="text-white/80 font-semibold font-sans">
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
