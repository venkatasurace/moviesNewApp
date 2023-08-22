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
    <div className="w-[300px] min-h-[140px] bg-gray-800 flex justify-center my-4 items-center  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-between items-center  w-[200px] my-auto  h-full">
        <div className="h-[70%] w-full overflow-hidden">
          {profile_path ? (
            <Image
              height={500}
              width={500}
              className="w-full h-full mb-3 overflow-hidden shadow-lg "
              src={`${imagePath}${profile_path}`}
              alt="Bonnie image"
            />
          ) : gender == 1 ? (
            <Image
              height={500}
              width={500}
              className="w-full h-full mb-3 overflow-hidden  shadow-lg"
              src="/dummy-image.jpg"
              alt="Bonnie image"
            />
          ) : (
            <Image
              height={500}
              width={500}
              className="w-full h-full mb-3 overflow-hidden  shadow-lg"
              src="/women.jpg"
              alt="Bonnie image"
            />
          )}
        </div>
        <div className="mb-5 justify-center">
          <h5 className="mb-1 text-xl font-medium text-center text-white dark:text-white">
            {name}
          </h5>
          {!crew_name ? (
            <h1 className="text-sm mx-auto text-center text-white dark:text-gray-400">
              {character}
            </h1>
          ) : (
            <h1 className="text-sm text-center mx-auto  text-white justify-center dark:text-gray-400">
              {job}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastCard;
