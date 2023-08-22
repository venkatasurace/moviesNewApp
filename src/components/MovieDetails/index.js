"use client";

import Image from "next/image";
import React from "react";
import CastCard from "../CastCard";
import ReactPlayer from "react-player";

const MovieDetails = (props) => {
  // console.log(props);

  const cast = props?.cast;
  const crew = props?.crew;

  const trailerVideos = props?.videos;
  var key;
  if (trailerVideos) {
    key = props?.videos[0]?.key;
  }

  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-full">
      <div className="w-full  flex justify-center items-center  relative px-5 py-8 ">
        <Image
          src={`${imagePath}${props.backdrop_path}`}
          height={1000}
          width={1000}
          className="w-full h-full object-center absolute -z-10  "
          alt="image"
        />
        <div className=" lg:w-[80%]  flex flex-col  md:flex-row  sm:items-center space-y-4 md:space-y-0  ">
          <div className="md:w-[50%] flex justify-center items-center">
            <Image
              height={300}
              width={400}
              src={`${imagePath}${props.poster_path}`}
              className="w-[300px] h-[320px] md:h-full sm:hidden"
              alt="image"
            />
            <div className="hidden w-full sm:block">
              {key ? (
                <ReactPlayer
                  controls={true}
                  height={300}
                  width={400}
                  light={
                    <Image
                      height={300}
                      width={400}
                      src={`${imagePath}${props.poster_path}`}
                      className="w-[90%] h-[340px] mb-6"
                      alt="image"
                    />
                  }
                  url={`https://youtu.be/${key}`}
                />
              ) : (
                <Image
                  height={300}
                  width={400}
                  src={`${imagePath}${props.poster_path}`}
                  className="w-[300px] h-[340px] mb-6"
                  alt="image"
                />
              )}
            </div>
          </div>
          <div className="md:w-[50%] backdrop-brightness-50 px-4 space-y-2 md:space-y-0">
            <h1 className="text-white text-2xl font-extrabold italic ">
              {props?.title}
            </h1>
            <h1 className="text-white  text-base">
              <span className=" font-bold text-base">Genres : </span>
              {props?.genres?.map((e) => e.name).join(",")}
            </h1>
            <h1 className="text-white  text-base">
              <span className=" font-bold text-base">Run time : </span>
              {`${Math.floor(props?.runtime / 60)}h ${props?.runtime % 60}m`}
            </h1>
            <h1 className="text-white  text-base">
              <span className=" font-bold text-base">languages : </span>
              {props?.spoken_languages?.map((e) => e.english_name).join(",")}
            </h1>

            <h1 className="text-lg font-bold text-white">Overview :</h1>
            <h1 className="text-white text-base">{props?.overview}</h1>

            <div className="flex flex-col justify-start items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-around sm:w-full ">
              <h1 className="text-green-500 font-bold">
                <span className=" text-white font-bold text-base">
                  Release_date :
                </span>{" "}
                {props?.release_date}
              </h1>
              <h1 className="text-green-500 font-bold">
                <span className=" text-white font-bold text-base">Rating</span>{" "}
                : {props?.vote_average}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-white my-3 text-2xl  text-center">Cast</h1>
      <div className="flex flex-col  overflow-x-auto w-full ">
        <div className="flex  space-x-4 pt-4 ">
          {cast?.map((e, idx) => (
            <CastCard key={idx} {...e} />
          ))}
        </div>
      </div>
      <h1 className=" font-bold text-white my-3 text-2xl  text-center">Crew</h1>
      <div className="flex flex-col  overflow-x-auto w-full ">
        <div className="flex  space-x-4  ">
          {crew?.map((e, idx) => (
            <CastCard crew_name={"crew"} key={idx} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
