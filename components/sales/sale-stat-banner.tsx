import Image from "next/image";
import Stat from "../stats/stat";


const SaleStatBanner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center flex-wrap justify-center w-full h-full pt-10 gap-10 p-3">
      <section className="flex flex-col items-center justify-center gap-10 ">
        <Stat title="456,234" description="small businesses supported" />
        <Stat title="1,204,234" description="individuals living their dream" />
        <Stat title="55" description="countries represented" />
        <Stat title="$32,463,623" description="in total sales" />
      </section>
      
    </div>
  );
};
export default SaleStatBanner;
