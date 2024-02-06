"use client"

import * as React from "react"
import { Search, CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation"

const options = [
 
  {
    value: "the pet store",
    label: "The Pet Store",
  },
  {
    value: "toolshop",
    label: "Toolshop",
  },
  {
    value: "too many computer parts",
    label: "Too Many Computer Parts",
  },

]

export function Searchbar() {

  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const route = (currentValue:any) => {
    setValue(currentValue === value ? "" : currentValue)
    
    if(currentValue==="the pet store"){
      router.push("/stores/thepetstore");
    }
    if(currentValue==="toolshop"){
      router.push("/stores/Toolshop");
    }
    if(currentValue=="too many computer parts"){
      router.push("/stores/toomanycomputerparts");
    }
   
   
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" h-[60%] bg-gradient-to-b flex items-center justify-center from-neutral-100/50 to-slate-100/50 text-slate-900 hover:text-slate-500 border-0 shadow-md hover:bg-slate-100"
        >
          
          <Search className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0  border-0">
        <Command className=" bg-gradient-to-tl from-slate-100/40 to-slate-100/60 flex items-center gap-2 text-slate-800 bg-opacity-50">
          <CommandInput placeholder="..." className="h-9 text-slate-800 placeholder:text-slate-600" />
          <CommandEmpty className="text-slate-500 text-sm p-4">No results found.</CommandEmpty>
          <CommandGroup  >
            {options.map((option) => (
              <CommandItem
                className={" truncate text-slate-500 aria-selected:bg-blue-200/40 aria-selected:text-slate-900/80"}
                key={option.value}
                value={option.value}
                onSelect={(currentValue:any) => {
                  route(currentValue)
                }}
              >
                
                {option.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
