import React from "react";
import { imagePath } from "@/utilities";
import Image from "next/image";
import Link from "next/link";

const SimilarMovieCard = ({ title, id, poster_path }) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="h-[300px] w-[200px]">
        <Image
          height={700}
          width={700}
          className="h-full "
          src={`${poster_path ? `${imagePath}${poster_path}` : "/noimage.png"}`}
          alt={`image${id}`}
        />
      </div>
    </Link>
  );
};

export default SimilarMovieCard;
