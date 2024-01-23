import { Poppins } from "next/font/google";
import SetupCard from "./setup-card";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Setup = () => {
  return (
    <section className="p-3">
      <h3
        className={cn(
          "text-3xl text-center tracking-tight font-bold text-slate-800  pb-5",
          font.className
        )}
      >
        Setup
      </h3>

      <div className="flex justify-center flex-wrap flex-col md:flex-row gap-10">
        <SetupCard
          title="Step One"
          subtitle="Setup Your Account"
          description="Fill in all your business details."
          imageUrl="/landing/setup1.webp"
          href="/sign-up"
          link="Get started"
        />

        <SetupCard
          title="Step Two"
          subtitle="Plan Your Business"
          description="Using our tools design the core concept of your retail business."
          imageUrl="/landing/setup2.webp"
          href="/sign-up"
          link="Start a plan"
        />
        <SetupCard
          title="Step Three"
          subtitle="Put your store on the market"
          description="Once you have designed your business, you can put your store on
          our market and also self-host it elsewhere."
          imageUrl="/landing/setup3.webp"
          href="/sign-up"
          link="Design your store now"
        />
      </div>
    </section>
  );
};
export default Setup;
