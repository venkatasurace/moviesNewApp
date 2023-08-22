import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoviesCard = ({
  title,
  poster_path,
  id,

  release_date,
  popularity,
  vote_average,
}) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  return (
    <Link href={`/movies/${id}`}>
      <div className="bg-white min-h-[540px] shadow-md rounded m-3">
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
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" hover:text-yellow-600 text-gray-700">
            <span className="text-base font-semibold uppercase tracking-wide ">
              {title}
            </span>
          </a>
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
    </Link>
  );
};

export default MoviesCard;
