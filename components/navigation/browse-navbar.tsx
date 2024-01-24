
interface BrowseNavbarProps {
  title:string;
}

const BrowseNavbar = ({
  title,
}:BrowseNavbarProps) => {
  return (
<section className="flex items-center h-[100px] justify-center w-full mt-[2rem] bg-slate-800/80 shadow-md">
  <h2 className="text-3xl text-white font-bold">{title}</h2>

</section>
  );
}
export default BrowseNavbar;