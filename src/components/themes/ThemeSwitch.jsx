"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import sun_image from "../../../public/assets/sun.png";
import moon_image from "../../../public/assets/moon.png";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (mounted) {
    return (
      <div className="w-fit hover:cursor-pointer hover:opacity-75 transition-all duration-300 ">
        {resolvedTheme === "dark" ? (
          <Image
            onClick={() => setTheme("light")}
            src={sun_image}
            width={25}
            height={25}
            sizes="25x25"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Switch to dark mode"
          />
        ) : (
          <Image
            onClick={() => setTheme("dark")}
            src={moon_image}
            width={25}
            height={25}
            sizes="25x25"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Switch to dark mode"
          />
        )}
      </div>
    );
  }
}
