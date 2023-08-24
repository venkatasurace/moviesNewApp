"use client";

import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard";

import { usePathname } from "next/navigation";

const Favorites = () => {
  const path = usePathname();

  // useEffect(() => {}, []);

  const favMovieData = JSON.parse(localStorage.getItem("favData"));

  const delFav = (e) => {
    // console.log(e);
  };

  return (
    <div>
      <h1 className="text-4xl text-white font-extrabold mb-3 ">
        Favorites Movies
      </h1>
      <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
        {favMovieData?.map((val, idx) => (
          <MoviesCard
            addFav={() => {}}
            delFav={delFav}
            path={path}
            key={idx}
            {...val}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
