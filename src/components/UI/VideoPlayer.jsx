"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

// SVG Icons
const PlayIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
      clipRule="evenodd"
    />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const FullscreenIcon = () => (
  <img
    width="24"
    height="24"
    src="https://img.icons8.com/ios/50/full-screen--v2.png"
    alt="full-screen--v2"
  />
);

const CustomVideoPlayer = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef(null);
  const video_container = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    gsap.to(video_container.current, {
      scrollTrigger: {
        trigger: video_container.current,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
      duration: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    });
  });

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      // IE/Edge
      video.msRequestFullscreen();
    }
  };

  return (
    <div
      ref={video_container}
      className="translate-x-40 scale-[0.9] opacity-0 relative inline-block"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        className="rounded-md shadow-md sm:w-[32rem] "
        controls={false} // Disable default controls
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-2 right-2 flex gap-2">
        <button
          title="Play/Pause"
          onClick={handlePlayPause}
          className="bg-neutral-400 text-black p-1 rounded"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          title="Full Screen"
          onClick={handleFullscreen}
          className="bg-neutral-400 text-black p-1 rounded"
        >
          <FullscreenIcon />
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
