import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";
import Link from "next/link";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/**user top section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        {/* navigation link section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <Link
                    href={link}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {name}
                  </Link>
                </li>
              );
              })}
          </ul>
        </nav>
      </div>
      {/* bottom footer section */}
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Ahmed Diboo</a>{" "}
        </h1>
      </div>

    </div>
  );
};

export default ResponsiveMenu;
