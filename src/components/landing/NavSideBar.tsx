import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Icon } from "@iconify/react"
import { navLinks } from "./Navbar"

const NavSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none">
          <span className="sr-only">Open main menu</span>
          <Icon icon="ic:round-menu" fontSize={24} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="items-center justify-between w-full md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {
              navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} className="block py-2 px-3 md:p-0 text-pr rounded hover:bg-gray-100 md:hover:bg-transparent text-sm md:hover:text-primary hoTiAn">{link.text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavSideBar;