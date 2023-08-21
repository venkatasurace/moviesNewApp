"use client";

import React, { useState } from "react";

import { useGetMoviesQuery } from "@/store/api/restApis";
import { ProgressBar } from "react-loader-spinner";
import MoviesCard from "../MoviesCard";

const Movies = () => {
  const [tab, setTab] = useState("now_playing");
  const [title, setTitle] = useState("Now Playing");
  const tabs = [
    { title: "Now Playing", tab: "now_playing" },
    { title: "Popular", tab: "popular" },
    { title: "Top Rated", tab: "top_rated" },
    { title: "Up Coming", tab: "upcoming" },
  ];
  const handleDropdownChange = (event) => {
    setTab(event.target.value);
    setTitle(event.target.value2);
    // dispatch(tabsHandler(event.target.value));
  };
  //   console.log(tab);
  const { data, isLoading } = useGetMoviesQuery({ tab });
  console.log("data", data);
  const moviesData = data?.results;
  console.log("data", moviesData);

  return (
    <div className="flex flex-col justify-center items-center space-y-7 min-h-screen w-full  p-5">
      <h1 className="text-4xl font-extrabold mb-3 ">Movies</h1>
      <div className="space-x-3  hidden   sm:flex justify-around items-center  flex-wrap">
        {tabs.map((val, idx) => (
          <button
            onClick={() => {
              setTab(val.tab);
              setTitle(val.title);
              //   dispatch(tabsHandler(val));
            }}
            className={`bg-stone-500 my-3 p-2 hover:shadow-2xl ${
              tab === val.tab ? "bg-red-500 shadow-red-500" : ""
            } `}
            key={idx}
          >
            {val.title}
          </button>
        ))}
      </div>
      <select
        className="border sm:hidden rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={tab}
        onChange={handleDropdownChange}
      >
        {tabs.map((e, idx) => (
          <option key={idx} value={e.tab}>
            {e.title}
          </option>
        ))}
      </select>
      <h1 className="text-3xl font-extrabold mb-3 hidden sm:block ">{title}</h1>

      <div className="flex justify-center items-center w-full  ">
        {isLoading ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        ) : (
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
            {moviesData?.map((val, idx) => (
              <MoviesCard key={idx} {...val} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
