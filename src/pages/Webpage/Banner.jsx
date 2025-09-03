import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/banner.svg";

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImg})`,
          transform: `translateY(${offsetY * 0.5}px)`, // Parallax effect
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-20 font-inter">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            St. Joseph&apos;s ACM Student Chapter
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 drop-shadow-md">
            Empowering students through technology, innovation, and community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
