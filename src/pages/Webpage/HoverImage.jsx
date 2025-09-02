import React, { useState } from "react";

const HoverImage = ({ src, line1, line2, linkedInUrl }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-xl transition-transform duration-500 ease-in-out group
          w-64 h-64 lg:m-2 md:w-64 md:h-64 max-w-xs mx-auto mb-4 hover:scale-105"
        onMouseMove={(e) => {
          if (window.innerWidth < 768) return;
          // Capture client coordinates to position the floating box relative to the viewport
          setPos({ x: e.clientX, y: e.clientY });
        }}
        onMouseEnter={() => window.innerWidth >= 768 && setHovering(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setHovering(false)}
      >
        {/* Image */}
        <img
          onClick={() => linkedInUrl && window.open(linkedInUrl, "_blank", "noopener,noreferrer")}
          src={src}
          alt={line1}
          className="w-full h-full object-cover filter grayscale transition duration-700 ease-in-out group-hover:grayscale-0"
        />

        {/* Label on image (always visible on mobile, hidden on desktop hover) */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between md:hidden">
          <div className="font-inter leading-tight">
            <span className="font-bold text-xs text-white">{line1}</span>
            <br />
            <span className="font-medium text-[10px] text-[#FFFFFFCC]">{line2}</span>
          </div>
        </div>
      </div>

      {/* Floating box (desktop hover only) - moved outside the parent div */}
      {hovering && window.innerWidth >= 768 && (
        <div
          // Changed to 'fixed' to position relative to the viewport, preventing clipping
          className="fixed pointer-events-none shadow-md z-50"
          style={{
            top: pos.y + 15,
            left: pos.x + 15,
            borderRadius: "0 1.5625rem 1.5625rem 1.5625rem",
            background: "#FFF",
            width: "11rem",
            height: "3.0625rem",
            padding: "0.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#5C5C5C",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            {line1}
          </span>
          <span
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {line2}
          </span>
        </div>
      )}
    </>
  );
};

export default HoverImage;
