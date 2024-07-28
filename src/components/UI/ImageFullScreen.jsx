"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageFullScreen = ({ src, divClass, imageClass }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);

  return (
    <div className={`relative flex justify-end ${divClass}`}>
      <Image
        src={src}
        className={`z-10 cursor-pointer rounded-md shadow-md ${imageClass}`}
        onClick={openFullScreen}
        fill
      />
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

export default ImageFullScreen;
