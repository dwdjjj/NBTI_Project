import * as React from "react";
import Header from "../Header";
import { WebsiteOverlay } from "../WebsiteOverlay";
import { VideoBackground } from "../VideoBackground";

function Homepage() {
  return (
    <>
      <Header />
      <div className="flex relative w-full h-full">
        <WebsiteOverlay />
        <VideoBackground />
      </div>
    </>
  );
}

export default Homepage;
