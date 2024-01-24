'use client'
import {useState, useEffect} from'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from 'lucide-react';
import NavActions from './nav-actions';
import { Button } from '../ui/button';

interface MobileNavbarProps {}

const MobileNavbar:React.FC<MobileNavbarProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <Popover>
  <PopoverTrigger >
    <Button variant="nav" asChild>
      <Menu className="w-12 h-12"/>
    </Button>
    </PopoverTrigger>
  <PopoverContent className=" bg-gradient-to-b from-slate-800/80 p-0 w-[100px] to-slate-900 border-0"><NavActions/></PopoverContent>
</Popover>
  );
}
export default MobileNavbar;