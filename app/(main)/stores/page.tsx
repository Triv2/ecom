import BrowseNavbar from "@/components/navigation/category-bar";
import LandingNavbar from "../_components/landing-navbar";
import StoreCard from "@/components/store/store-card";

interface StoresPageProps {}

const StoresPage = () => {
  return (
<div className=" w-full min-h-screen h-auto flex flex-col  ">
  <LandingNavbar/>
  
  
  <div className="grid grid-cols-3 pl-[140px] min-h-screen h-auto p-5 bg-gradient-to-b from-sky-100/50 via-slate-100/80 to-slate-100/80">
    <StoreCard
      title="Store 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      imageUrls={["https://images.unsplash.com/photo-150030944"]}
    /></div>

</div>
  );
}
export default StoresPage;