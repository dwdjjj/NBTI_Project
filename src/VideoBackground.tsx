import React, { VFC } from "react";
import "./VideoBackground.css";

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export const VideoBackground: VFC = () => {
  return (
    <>
      <div className="video-background">
        <iframe
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          src="https://www.youtube.com/embed/datV_V-SZBg?autoplay=1&controls=0&mute=1&loop=1&playlist=datV_V-SZBg&modestbranding=1&showinfo=0&start=0&enablejsapi=1&&widgetid=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
};
