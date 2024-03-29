"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkmMode from "./DarkmMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { usePathname } from "next/navigation";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Features",
    link: "/features",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
  
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="text-3xl font-bold ">
            <span>Car</span>
            <span className="text-primary">Car</span>
          </Link>

          {/* desktop menu Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === link;
                return (
                  <li key={id} className="py-4">
                    <Link
                      href={link}
                      className={`${isActive ? "bg-priamry dark:text-black":""} text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary dration-300`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* DarkMode feature implement */}
              <DarkmMode />
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            <DarkmMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
