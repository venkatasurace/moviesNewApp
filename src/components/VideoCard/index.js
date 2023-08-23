"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ videos }) => {
  //   console.log(videos);
  return (
    <div>
      {videos?.key && (
        <ReactPlayer
          controls={true}
          height={300}
          width={400}
          playing={false}
          url={`https://youtu.be/${videos?.key}`}
        />
      )}
    </div>
  );
};

export default VideoCard;
