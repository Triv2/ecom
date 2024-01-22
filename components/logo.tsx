import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

import {cn} from "@/lib/utils"

// const  logoFont = localFont({
//   src: ""
// })

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2   flex">
        <Image className="transform -scale-x-100" src="/logo.png" alt="logo" width={50} height={50} />
      
      <p className={cn("font-bold text-md md:text-2xl font-sans bg-gradient-to-br from-blue-500  to-emerald-300 bg-clip-text text-transparent sm:flex hidden ",
      //logoFont.className
      )}>
        Simpec</p>
        </div>
    </Link>
  )
}