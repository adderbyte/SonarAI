import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import NavSideBar from "./NavSideBar";

export const navLinks = [
  { href: "#features", text: "Features" },
  { href: "#contact", text: "Contact" },
];

const NavBar = () => {
  return (
    <nav className="backdrop-blur-md border-b border-gray-300 top-0 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="self-center font-semibold whitespace-nowrap text-2xl flex flex-col">
            <span>Sonar Education</span>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <Button
            type="button"
            variant={"ghost"}
            className="text-primary hover:text-primary/85 hoTiAn max-[520px]:hidden"
          >
            Log In
          </Button>
          <Button type="button" className="mainButton max-[520px]:hidden">
            <p>Sign Up</p>
            <Icon icon="gg:arrow-right" fontSize={18} color="white" />
          </Button>
          <NavSideBar />
        </div>
        <div
          className="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block py-2 px-3 md:p-0 text-pr rounded hover:bg-gray-100 md:hover:bg-transparent text-sm md:hover:text-primary hoTiAn"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;