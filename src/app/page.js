import Movies from "@/components/Movies";
import SearchMovieCard from "@/components/SearchMovieCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Movies />
    </div>
  );
}
