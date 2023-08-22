"use client";

import React from "react";
import MoviesSearch from "@/components/MovieSearch";

import { useParams } from "next/navigation";

import { useGetSearchMoviesQuery } from "@/store/api/restApis";

const SearchMovies = () => {
  const params = useParams();

  const searchInput = params.name;

  const { data } = useGetSearchMoviesQuery({ searchInput });

  // console.log(data);
  const searchRes = data?.results;

  return (
    <div>
      <MoviesSearch searchRes={searchRes} />
    </div>
  );
};

export default SearchMovies;
