import { Button } from "../ui/button";
import { Searchbar } from "./searchbar";

interface FilterBarProps {
  
}
const filters = [
 
  {
    value: "price",
    label: "Price",
  },
  {
    value: "quantity",
    label: "Quantity",
  },
  {
    value: "reviews",
    label: "Reviews",
  },
  {
    value: "# of Sales",
    label: "# of Sales", 
  },
  {
    value: "date",
    label: "Date",
  },
 

]

const FilterBar = ({

}:FilterBarProps) => {
  return (
<section className="flex items-center md:flex-row flex-col h-auto md:h-[40px] justify-center w-full gap-2  bg-gradient-to-b rounded-b-md from-slate-600/80 via-slate-500/80 to-slate-600/90 shadow-lg">
{filters.map(category => (
  <Button variant="nav"key={category.value} className="flex flex-col items-center text-sky-300 hover:text-sky-400 p-2 rounded-md text-sm shadow-md">
    {category.label}
    </Button>
))}
  
</section>
  );
}
export default FilterBar;