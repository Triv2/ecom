'use client'
import {useState, useEffect} from'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronRightSquare, Menu } from 'lucide-react';
import NavActions from './nav-actions';
import { Button } from '../ui/button';
import CategoryBar from './category-bar';
import FilterBar from './filterbar';

interface MobileFilterBarProps {}

const MobileFilterBar:React.FC<MobileFilterBarProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <Popover>
  <PopoverTrigger className="bg-slate-800/80 rounded-r-md">
    <Button variant="nav" className="flex items-center gap-1 justify-center" >
      <ChevronRightSquare className="w-5 h-5"/>
      Filters
    </Button>
    </PopoverTrigger>
  <PopoverContent className=" bg-gradient-to-b from-slate-800/80 p-0 w-[100px] to-slate-900 border-0"><FilterBar/></PopoverContent>
</Popover>
  );
}
export default MobileFilterBar;