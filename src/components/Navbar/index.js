"use Client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="bg-slate-600 h-[10vh] flex space-x-4 items-center fixed top-0 w-full z-10  ">
      <Link href="/">
        <h1 className={`ml-4 ${path === "/" ? "font-bold text-white" : ""}`}>
          Movies
        </h1>
      </Link>
      <Link href={"/articles"}>
        <h1
          className={`ml-4  ${
            path === "/articles" ? "font-bold text-white" : ""
          } `}
        >
          Articles
        </h1>
      </Link>
      <Link href={"/top-headlines"}>
        <h1
          className={`ml-4  ${
            path === "/top-headlines" ? "font-bold text-white" : ""
          }`}
        >
          Headlines
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
