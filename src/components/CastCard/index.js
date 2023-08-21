import Image from "next/image";
import React from "react";

const CastCard = ({
  name,
  character,
  profile_path,
  crew_name,
  job,
  gender,
}) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";
  return (
    <div className="w-[300px] min-h-[300px] flex justify-center my-4 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col  items-center  w-[200px] my-auto">
        {profile_path ? (
          <Image
            height={500}
            width={500}
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`${imagePath}${profile_path}`}
            alt="Bonnie image"
          />
        ) : (
          <Image
            height={500}
            width={500}
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/dummy-image.jpg"
            alt="Bonnie image"
          />
        )}

        <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
          {name}
        </h5>
        {!crew_name ? (
          <span className="text-sm text-center text-gray-500 dark:text-gray-400">
            {character}
          </span>
        ) : (
          <span className="text-sm text-center text-gray-500 dark:text-gray-400">
            {job}
          </span>
        )}
      </div>
    </div>
  );
};

export default CastCard;
