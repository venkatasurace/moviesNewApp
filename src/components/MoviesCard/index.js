import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { MdOutlineFavorite } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function MoviesCard({
  title,
  poster_path,
  id,
  release_date,
  popularity,
  vote_average,
  addFav,
  delFav,
  path,
}) {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  const [toggle, setToggle] = useState("");

  console.log(addFav, delFav);

  return (
    <div className="bg-white min-h-[540px] shadow-md rounded m-3">
      <Link href={`/movies/${id}`}>
        <div className="h-3/4 w-full">
          <Image
            height={700}
            width={700}
            className="w-full h-full  rounded-t"
            src={`${imagePath}${poster_path}
        `}
            alt={`image${id}`}
          />
        </div>
      </Link>

      <div className="w-full h-1/4 p-3">
        <div className="flex justify-between items-center">
          <h1 className=" hover:text-yellow-600 text-gray-700">
            <span className="text-base font-semibold uppercase tracking-wide ">
              {title}
            </span>
          </h1>

          <div
            onClick={() => {
              addFav(id);
              setToggle(id);
            }}
          >
            {id === toggle ? (
              <MdOutlineFavorite size={20} className="text-red-500 " />
            ) : (
              <MdOutlineFavorite
                onClick={() => delFav(id)}
                size={20}
                className=""
              />
            )}
          </div>

          {/* {path === "/favorite" && (
            <div onClick={() => delFav(id)}>
              <RxCross1 />
            </div>
          )} */}
        </div>

        <p className="text-gray-600 text-sm leading-5 mt-1">
          Release-date:{release_date}
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">
          Popularity :
          <span className="text-green-500 font-bold">{popularity}</span>
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">
          Rating :
          <span className="text-red-500 font-bold">{vote_average}/10</span>
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
