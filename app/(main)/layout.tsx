import { Navbar } from "@/components/navigation/navbar/navbar";


const LandingLayout = ( {
  children
}: {children: React.ReactNode}) => {
  return (
  <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center">

    {children}
  </div>
  );
}
export default LandingLayout;