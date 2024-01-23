import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});


const Contact = () => {
  return (
<section className="flex md:flex-row flex-col items-center gap-5 justify-center rounded-md shadow-md 
border border-sky-800/30 bg-gradient-to-br from-sky-100/40 to-neutral-100/30  py-10 md:py-20 px-2 md:px-20">
  <article className="flex flex-col gap-5 md:w-[35%] border-b md:border-b-0 md:border-r space-y-8  border-slate-800/50">
  <h3 className={cn("text-3xl font-bold text-slate-800 px-1", font.className)}>Let us know if you have any questions!</h3>
  <p className="text-muted-foreground px-1">Feel free to leave us an email at anytime or contact us through the webportal.</p>
  <div>
    <p className="font-semibold text-slate-700 px-1">For further information, please visit:</p>
    <ul>
      <li>
        <Button variant="nav" asChild>
        <Link href="/">
          Help
        </Link>
        </Button>
      </li>
      <li>
        <Button variant="nav" asChild>
        <Link href="/">
          Policies
        </Link>
        </Button>
      </li>
    </ul>
  </div>
  </article >
  
  <article className="flex flex-col w-full md:w-[50%] gap-5 px-1 md:px-10">
    <div>
    <p className="font-bold text-slate-800">Name</p>
  <Input name="name" className="bg-white"/>
  </div>
  <div>
    <p className="font-bold text-slate-800">Email</p>
  <Input name="email" className="bg-white"/>
  </div>
  <div>
    <p className="font-bold text-slate-800">Message</p>
  <Input name="message" className="bg-white"/>
  </div>


  </article>
</section>
  );
}
export default Contact;