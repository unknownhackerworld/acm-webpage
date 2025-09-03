import React from 'react'
import HoverImage from './HoverImage'

const FacultyComponent = ({ heading, content, image, line1, line2 }) => {
  return (
    <div className="flex flex-col flex-1 items-center">
      {/* Constrain text + image to same width */}
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Text Block */}
        <div className="font-inter flex flex-col gap-4 text-center w-full">
          <span className="font-bold text-2xl text-[#000000]">{heading}</span>
          <span className="font-normal text-sm leading-7 text-[#000000CC] text-justify">
            {content}
          </span>
        </div>

        {/* Image Block (same width as text) */}
        <div className="w-full">
          <HoverImage
            src={image}
            line1={line1}
            line2={line2}
            rounded={true}
            grayscaleOnHover={false}
            hoverEffect={true}
            showTooltip={true}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default FacultyComponent
