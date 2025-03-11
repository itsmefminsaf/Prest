"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="bg-fg-secondary/50 outline-fg/50 absolute top-4 left-[5%] grid w-[90%] grid-cols-2 flex-wrap rounded-3xl p-3 px-5 outline-4 backdrop-blur-3xl sm:grid-cols-[auto_auto]">
      <img src="/assets/logo.svg" alt="Prest" className="h-7" />
      <button
        className="bg-fg aspect-square place-self-end rounded-2xl p-2 text-white sm:hidden"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {isNavOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isNavOpen ? (
        <nav className="animate-expand col-span-2 origin-top place-self-center sm:col-span-1 sm:place-self-end">
          <ul className="flex h-full flex-col items-center justify-center text-xl text-white sm:flex-row sm:gap-3 sm:text-sm">
            <li className="hover:bg-bg/50 hover:text-fg-secondary rounded-xl p-2 font-bold duration-200 hover:backdrop-blur-2xl">
              About
            </li>
            <li className="hover:bg-bg/50 hover:text-fg-secondary rounded-xl p-2 font-bold duration-200 hover:backdrop-blur-2xl">
              Features
            </li>
            <li className="hover:bg-bg/50 hover:text-fg-secondary rounded-xl p-2 font-bold duration-200 hover:backdrop-blur-2xl">
              Check Availability
            </li>
            <li className="hover:bg-bg/50 hover:text-fg-secondary rounded-xl p-2 font-bold duration-200 hover:backdrop-blur-2xl">
              Contact Us
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
