"use client";
import Image from "next/image";
import React from "react";

const ImageOnClick = ({ src, buttonText }) => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const openFullScreen = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);
  return (
    <div>
      <button
        onClick={openFullScreen}
        className="font-primary sm:text-base text-xs underline underline-offset-2 text-blue-400"
      >
        {buttonText}
      </button>

      {isFullScreen && (
        <div
          className="z-20 fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeFullScreen}
        >
          <div className="onLoad relative w-full h-full">
            <Image src={src} className="object-contain" fill />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOnClick;
