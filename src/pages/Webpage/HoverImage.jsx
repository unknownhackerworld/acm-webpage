import React, { useState } from "react";

const HoverImage = ({
  src,
  line1,
  line2,
  linkedInUrl,
  width,
  height,
  className = "",
  hoverEffect = true,
  grayscaleOnHover = true,
  showTooltip = true,
  rounded = false,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden ${rounded ? "rounded-lg" : ""} transition-transform duration-500 ease-in-out group
          ${width} ${height} ${className} ${hoverEffect ? "hover:scale-105" : ""}`}
        onMouseMove={(e) => {
          if (window.innerWidth < 768 || !showTooltip) return;
          setPos({ x: e.clientX, y: e.clientY });
        }}
        onMouseEnter={() =>
          window.innerWidth >= 768 && showTooltip && setHovering(true)
        }
        onMouseLeave={() =>
          window.innerWidth >= 768 && showTooltip && setHovering(false)
        }
      >
        <img
          onClick={() =>
            linkedInUrl && window.open(linkedInUrl, "_blank", "noopener,noreferrer")
          }
          src={src}
          alt={line1}
          className={`w-full h-full object-cover ${grayscaleOnHover
              ? "filter grayscale transition duration-700 ease-in-out group-hover:grayscale-0"
              : ""
            }`}
        />

        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between md:hidden">
          <div className="font-inter leading-tight">
            <span className="font-bold text-xs text-white">{line1}</span>
            <br />
            <span className="font-medium text-[10px] text-[#FFFFFFCC]">{line2}</span>
          </div>
        </div>
      </div>

      {hovering && window.innerWidth >= 768 && showTooltip && (
        <div
          className="fixed pointer-events-none shadow-md z-50 px-6"
          style={{
            top: pos.y + 15,
            left: pos.x + 15,
            borderRadius: "0 1.5625rem 1.5625rem 1.5625rem",
            background: "#FFF",
            width: "auto",
            height: "3.0625rem",
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
