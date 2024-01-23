import Image from "next/image";
import Link from "next/link";

const Setup = () => {
  return (
    <section className="p-3">
      <h3 className="text-3xl text-center font-bold text-slate-800  pb-5"> Setup</h3>

      <div className="flex justify-center flex-wrap flex-col md:flex-row gap-10">
        <article className="bg-slate-400/10 rounded-md h-auto w-auto p-2 flex items-center justify-evenly flex-col border border-sky-800/30 shadow-md min-w-[30%]">
          <div className="flex sm:flex-row  flex-col  sm:justify-start gap-3 p-2 w-full">
            <Image
              src="/landing/setup1.webp"
              width={150}
              height={150}
              alt="logo"
              className="rounded-md"
            />
            <div className="flex flex-col  justify-evenly">
              <h4 className="font-bold text-slate-800  text-2xl">Step One</h4>
              <h5>Setup Your Account</h5>

              <p className="text-muted-foreground">
                Fill in all your business details.
              </p>
              <Link
                href="/sign-up"
                className="text-sky-600 hover:text-sky-400 hover:underline mt-2"
              >
                Get started
              </Link>
            </div>
          </div>
        </article>
        <article className="bg-slate-400/10 rounded-md h-auto w-auto p-2 flex items-center justify-evenly flex-col border border-sky-800/30 shadow-md min-w-[30%]">
          <div className="flex sm:flex-row flex-col justify-start gap-3 p-2 w-full">
            <Image
              src="/landing/setup2.webp"
              width={150}
              height={150}
              alt="logo"
              className="rounded-md"
            />
            <div className="flex flex-col justify-evenly ">
              <h4 className="font-bold text-slate-800  text-2xl">Step Two</h4>
              <h5>Plan Your Business</h5>

              <p className="text-muted-foreground">
                Using our tools design the core concept of your retail business.
              </p>
              <Link
                href="/sign-up"
                className="text-sky-600 hover:text-sky-400 hover:underline mt-2"
              >
                Start a plan
              </Link>
            </div>
          </div>
        </article>
        <article className="bg-slate-400/10 rounded-md h-auto w-auto p-2 flex items-center justify-evenly flex-col border border-sky-800/30 shadow-md min-w-[30%]">
          <div className="flex sm:flex-row flex-col  justify-start gap-3 p-2 w-full">
            <Image
              src="/landing/setup3.webp"
              width={150}
              height={150}
              alt="logo"
              className="rounded-md"
            />
            <div className="flex flex-col justify-evenly">
              <h4 className="font-bold text-slate-800  text-2xl">Step Three</h4>
              <h5>Put your store on the market</h5>

              <p className="text-muted-foreground">
                Once you have designed your business, you can put your store on
                our market and also self-host it elsewhere.
              </p>
              <Link
                href="/sign-up"
                className="text-sky-600 hover:text-sky-400 hover:underline mt-2"
              >
                Design your store now
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Setup;
