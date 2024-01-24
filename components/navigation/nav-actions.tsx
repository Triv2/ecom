'use client'
import {useState, useEffect} from'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

interface NavActionsProps {}

const NavActions:React.FC<NavActionsProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    
    <div className="sm:flex-row flex flex-col items-center justify-center gap-2 ">
     <Button variant="nav" asChild>
        <Link href="/market">Market</Link>
      </Button>
      <Button variant="nav" asChild>
        <Link href="/stores">Stores</Link>
      </Button>
      <Button variant="nav" asChild>
        <Link href="/sign-in">Login</Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
   
   
  );
}
export default NavActions;