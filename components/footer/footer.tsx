import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FooterList from "./footer-list"

export const Footer = () => {
  return (
    <div className="block bottom-0 w-full h-auto bg-gradient-to-b from-neutral-700 to-slate-900 bg-opacity-50">
      <div className="  flex items-center w-full bg-slate-900/40 h-full justify-end px-4">
        {/* <FooterList
        title="Simpec"
        links={["legal","about", "contact", "products"]}
        /> */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between z-10 w-full">

          <Button className="text-sky-400/80" size="sm" variant="nav">
            Privacy Policy
          </Button>
          <Button className="text-sky-400/80" size="sm" variant="nav">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}