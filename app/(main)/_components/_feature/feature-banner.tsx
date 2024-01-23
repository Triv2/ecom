import {
  ArrowUpDown,
  Building2,
  Expand,
  LineChart,
  Users,
  Warehouse,
} from "lucide-react";
import Feature from "./feature";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const FeatureBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h3 className={cn("font-bold font-sans tracking-tight text-slate-800  text-3xl",font.className)}>Supports </h3>
        <section className="flex items-center justify-center p-3 gap-3  flex-wrap ">
          <Feature
            title="Small Business"
            icon={
              <Building2 className="text-blue-400 bg-blue-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Supporting small over big business. We prioritize the little guy!"
          />
          <Feature
            title="Startups"
            icon={
              <Warehouse className="text-green-400 bg-green-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Getting your business online has never been easier or this cost-effective."
          />
          <Feature
            title="Individuals"
            icon={
              <Users className="text-purple-400 bg-purple-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Novices, newbies, and experienced solo entrepreneurs welcome."
          />
        </section>
      </div>
      <div className="flex flex-col items-center justify-center">
      <h3 className={cn("font-bold font-sans text-slate-800 tracking-tight text-3xl",font.className)}>Benefits</h3>
        <section className="flex items-center justify-center p-3 gap-3  flex-wrap ">
          <Feature
            title="Online Presence"
            icon={
              <ArrowUpDown className="text-fuchsia-400 bg-fuchsia-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Put your business on the internet to reach customers from all over the world."
          />
          <Feature
            title="Fast Growth"
            icon={
              <LineChart className="text-red-400 bg-red-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Grow faster by integrating your business into our marketplace and it's own website."
          />
          <Feature
            title="Easy Scaling"
            icon={
              <Expand className="text-orange-400 bg-orange-200/50 rounded-md p-2 h-11 w-11" />
            }
            description="Scale your business faster with our tools that simplify the process."
          />
        </section>
      </div>
    </div>
  );
};
export default FeatureBanner;
