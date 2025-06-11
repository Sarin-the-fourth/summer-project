import React, { useRef, useEffect } from "react";
import "./Mainbody.scss";

const MainBody = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videos = ["/Herovideo1.MP4", "/Herovideo2.MP4"];
    let currentIndex = 0;

    const handleEnded = () => {
      currentIndex = (currentIndex + 1) % videos.length; // Loop between videos
      video.src = videos[currentIndex];
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);
  return (
    <div className="m-0 p-0 hero min-h-screen h-full ">
      <video
        ref={videoRef}
        className="block absolute top-0 left-0 w-full h-full object-cover"
        src="/Herovideo1.MP4"
        autoPlay
        muted
      ></video>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="pl-10 text-4xl" style={{ color: " #fdb913" }}>
            Are you looking for
          </h1>

          <h2 className="mb-5 text-8xl font-bold" style={{ color: " #fdb913" }}>
            Adventure?
          </h2>
          <p className="mb-5 text-lg pl-15 ">
            We offer exciting trips all over the Himalayas, Nepal, Tibet, Bhutan
            and some parts of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
