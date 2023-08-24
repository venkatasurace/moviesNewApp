"use client";

import React from "react";

import {
  useGetPersonDetailsQuery,
  useGetPersonImagesQuery,
} from "@/store/api/restApis";

import { useParams } from "next/navigation";

import { imagePath } from "@/utilities";
import { useState } from "react";
import Image from "next/image";
import { Puff } from "react-loader-spinner";

const CastDetails = () => {
  const params = useParams();
  const [showDetails, setShowDetails] = useState(false);

  const id = params.id;

  const { data, isLoading } = useGetPersonDetailsQuery({ id });

  const { data: imagesData } = useGetPersonImagesQuery({ id });

  const images = imagesData?.profiles;

  console.log("data", images);

  return (
    <div className=" w-full flex-col justify-center items-center mx-auto h-screen md:w-[90%] lg:w-[70%] ">
      {isLoading ? (
        <Puff
          height="80"
          width="80"
          radius={1}
          color="white"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center ">
            <div className="md:w-[40%]">
              <Image
                height={500}
                width={500}
                className="w-full h-full mb-3 rounded-lg overflow-hidden shadow-lg  object-center"
                //   src={`${imagePath}${data?.profile_path}`}
                src={`${
                  data?.profile_path
                    ? `${imagePath}${data?.profile_path}`
                    : "/noimage.png"
                }`}
                alt={`image${id}`}
              />
            </div>
            <div className="text-white space-y-3 px-5 font-bold md:w-[60%]">
              <h1>
                Name: <span className="text-xl font-normal">{data?.name}</span>
              </h1>
              {data?.biography && (
                <h1>
                  About:
                  <span className="text-base font-normal">
                    {data?.biography}
                  </span>
                </h1>
              )}
              {data?.birthday && (
                <h1>
                  D.O.B:{" "}
                  <span className="text-base font-normal">
                    {data?.birthday}
                  </span>
                </h1>
              )}
              {data?.place_of_birth && (
                <h1>
                  Place of birth:{" "}
                  <span className="text-base font-normal">
                    {data?.place_of_birth}
                  </span>
                </h1>
              )}

              {data?.also_known_as && (
                <div className="">
                  <span>Also known as :</span>
                  <div className="flex flex-wrap ">
                    {data?.also_known_as?.map((e, idx) => e).join(",")}
                  </div>
                </div>
              )}
            </div>
          </div>
          {images && (
            <>
              <h1 className="text-white text-2xl">More images</h1>
              <div className="flex flex-col  overflow-x-auto w-full p-3">
                <div className="flex  space-x-4  ">
                  {images?.map((e, idx) => (
                    <Image
                      key={idx}
                      height={700}
                      width={700}
                      className=" h-[220px] w-[180px] "
                      src={`${
                        e?.file_path
                          ? `${imagePath}${e?.file_path}`
                          : "/noimage.png"
                      }`}
                      alt={`image${idx}`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CastDetails;
