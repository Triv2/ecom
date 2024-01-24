import BrowseNavbar from "@/components/navigation/browse-navbar";
import LandingNavbar from "../_components/landing-navbar";

interface StoresPageProps {}

const StoresPage = () => {
  return (
<div className=" w-full min-h-screen h-auto flex flex-col justify-between  ">
  <LandingNavbar/>
  <BrowseNavbar title="Stores" />
StoresPage
</div>
  );
}
export default StoresPage;