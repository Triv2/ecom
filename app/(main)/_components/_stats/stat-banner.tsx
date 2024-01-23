import Image from "next/image";
import Stat from "./stat";

const StatBanner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center flex-wrap justify-center w-full gap-10 p-3">
      <section className="grid  md:grid-cols-2 gap-4 ">
        <Stat title="456,234" description="small businesses supported" />
        <Stat title="1,204,234" description="individuals living their dream" />
        <Stat title="55" description="countries represented" />
        <Stat title="$32,463,623" description="in total sales" />
      </section>
      <Image
        src="/landing/globe.png"
        width={350}
        height={350}
        alt="stats"
        className="rounded-full bg-gradient-to-b from-sky-200/20 to-netural-200/30 shadow-sm"
      />
    </div>
  );
};
export default StatBanner;
