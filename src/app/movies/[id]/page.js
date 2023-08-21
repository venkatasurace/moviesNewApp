"use client";

import React from "react";
import dynamic from "next/dynamic";

import {
  useGetMovieByIdQuery,
  useGetMovieDetailsCastQuery,
  useGetMovieVideosQuery,
} from "@/store/api/restApis";

import { useParams, useRouter } from "next/navigation";

const MovieDetails = dynamic(() => import("@/components/MovieDetails"), {
  ssr: false,
});

const MoviesDetailsPage = () => {
  const params = useParams();
  const id = params.id;

  const { data } = useGetMovieByIdQuery({ id });
  const { data: castData } = useGetMovieDetailsCastQuery({ id });
  const { data: movieVideos, isLoading } = useGetMovieVideosQuery({ id });
  // console.log("castData", castData);
  // console.log("movieVideos", movieVideos?.results);

  const trailer = movieVideos?.results?.filter((e) => e.type == "Trailer");
  console.log(trailer, "trailer");

  return (
    <div>
      <MovieDetails
        {...data}
        cast={castData?.cast}
        crew={castData?.crew}
        videos={trailer}
      />
    </div>
  );
};

export default MoviesDetailsPage;
