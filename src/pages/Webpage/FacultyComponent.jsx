import React from 'react'
import HoverImage from './HoverImage'

const FacultyComponent = ({ heading, content, image, line1, line2 }) => {
  return (
    <div className="flex flex-col flex-1 gap-6 items-center">
      <div className="font-inter flex flex-col gap-4 text-center">
        <span className="font-bold text-2xl text-[#000000]">{heading}</span>
        <span className="font-normal text-sm leading-7 text-[#000000CC] text-justify">
          {content}
        </span>

      </div>

      <HoverImage
        src={image}
        line1={line1}
        line2={line2}
        rounded={true}
        grayscaleOnHover={false}
        hoverEffect={true}
        showTooltip={true}
      />
    </div>
  )
}

export default FacultyComponent
