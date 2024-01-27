import { Button } from "../ui/button";
import { Searchbar } from "./searchbar";

interface CategoryBarProps {
  
}
const categories = [
 
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "bestselling",
    label: "Bestselling",
  },
  {
    value: "new releases",
    label: "New Releases",
  },
  {
    value: "appliances",
    label: "Appliances",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "technology",
    label: "Technology",
  },

]

const CategoryBar = ({

}:CategoryBarProps) => {
  return (
<section className="flex items-center md:flex-row flex-col  md:h-[50px] justify-center w-full gap-2  md:bg-gradient-to-b  md:from-slate-900/80 md:via-slate-800/80 md:to-slate-800/90 md:shadow-lg">
{categories.map(category => (
  <Button variant="nav"key={category.value} className="flex flex-col items-center  p-2 rounded-md text-sm ">
    {category.label}
    </Button>
))}
  
</section>
  );
}
export default CategoryBar;