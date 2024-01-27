'use client'
import {useState, useEffect} from 'react'
import {Button} from '../ui/button';
import Link from 'next/link';
import {SignInButton, UserButton} from '@clerk/nextjs';


interface NavActionsProps {
}

const NavActions: React.FC<NavActionsProps> = () => {

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
                <Link href="/about">About</Link>
            </Button>
            <SignInButton mode="modal">
                <Button variant="nav" asChild>
                   <p className="hover:cursor-pointer">Login</p>
                </Button>
            </SignInButton>

            <UserButton afterSignOutUrl="/"/>
        </div>


    );
}
export default NavActions;