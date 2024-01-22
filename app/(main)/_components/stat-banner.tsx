import Image from "next/image";

interface StatBannerProps {}

const StatBanner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center flex-wrap justify-center w-full gap-10 p-3">
      <section className="grid  md:grid-cols-2 gap-4 ">
        <article className="bg-gradient-to-b from-sky-500 to-slate-200 pl-2 flex flex-col ">
          <div className="flex flex-col justify-center pl-5 w-full h-full bg-white gap-1">
            <h3 className="font-bold text-4xl">456,234</h3>
            <p className="text-muted-foreground pl-1">
              small businesses supported
            </p>
          </div>
        </article>
        <article className="bg-gradient-to-b from-sky-500 to-slate-200 pl-2 flex flex-col gap-1">
          <div className="flex flex-col justify-center pl-5 w-full h-full bg-white">
            <h3 className="font-bold text-4xl">1,204,234</h3>
            <p className="text-muted-foreground pl-1 ">
              individuals living their dream
            </p>
          </div>
        </article>
        <article className="bg-gradient-to-b from-sky-500 to-slate-200 pl-2 flex flex-col gap-1">
          <div className="flex flex-col justify-center pl-5 w-full h-full bg-white">
            <h3 className="font-bold text-4xl">55</h3>
            <p className="text-muted-foreground pl-1">countries represented</p>
          </div>
        </article>
        <article className="bg-gradient-to-b from-sky-500 to-slate-200 pl-2 flex flex-col gap-1">
          <div className="flex flex-col justify-center pl-5 w-full h-full bg-white">
            <h3 className="font-bold text-4xl">$32,463,623</h3>
            <p className="text-muted-foreground pl-1">in total sales</p>
          </div>
        </article>
      </section>
      <Image
        src="/globe.png"
        width={350}
        height={350}
        alt="stats"
        className="rounded-full bg-gradient-to-b from-sky-200/20 to-netural-200/30 shadow-sm"
      />
    </div>
  );
};
export default StatBanner;
