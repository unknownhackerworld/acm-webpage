import React, { useEffect, useRef, useState } from "react";
import karstonCol from "../../assets/members/color/karstoncol.svg";
import kavinCol from "../../assets/members/color/kavincol.svg";
import vidurCol from "../../assets/members/color/vidurcol.svg";
import shobikaCol from "../../assets/members/color/shobikacol.svg";
import ruthCol from "../../assets/members/color/ruthcol.svg";
import alanbabuCol from "../../assets/members/color/alanbabuCol.svg";
import akshayaCol from "../../assets/members/color/akshayaCol.svg";
import JoshuaRyanCol from "../../assets/members/color/JoshuaRyanCol.svg";
import AustinCol from "../../assets/members/color/AustinCol.svg";
import AllenCol from "../../assets/members/color/AllenCol.svg";
import JasmineCol from "../../assets/members/color/JasmineCol.svg";
import JunaidCol from "../../assets/members/color/junaidCol.svg";
import HariniCol from "../../assets/members/color/HariniCol.svg";
import HoverImage from "./HoverImage";

const Members = () => {
  const members = [
    { src: kavinCol, line1: "Kavin Thangamani", line2: "Chairperson", linkedInUrl: "https://www.linkedin.com/in/kavin-thangamani-019487283" },
    { src: JasmineCol, line1: "Jasmine Ramola J", line2: "Vice - Chairperson", linkedInUrl: "https://www.linkedin.com/in/jasmine-ramola-j" },
    { src: karstonCol, line1: "Karston", line2: "Secretary" },
    { src: JunaidCol, line1: "Junaid", line2: "Joint - Secretary", linkedInUrl: "https://www.linkedin.com/in/junaid-abdul-alim-07a599311" },
    { src: shobikaCol, line1: "Shobika D", line2: "Research Head", linkedInUrl: "https://www.linkedin.com/in/shobika-dayanidhi" },
    { src: vidurCol, line1: "Vidur Varshan", line2: "Membership Chair", linkedInUrl: "https://www.linkedin.com/in/vidur-varshan-332311298" },
    { src: ruthCol, line1: "Ruth J", line2: "Treasurer", linkedInUrl: "https://www.linkedin.com/in/ruth--john/" },
    { src: alanbabuCol, line1: "Alan Babu K", line2: "Technical Head", linkedInUrl: "https://www.linkedin.com/in/alan-babu-48784632b/" },
    { src: akshayaCol, line1: "Akshaya Magesh", line2: "Design Head", linkedInUrl: "https://www.linkedin.com/in/akshaya-magesh-83b40a331/" },
    { src: JoshuaRyanCol, line1: "Joshua Ryan", line2: "Social Media Head", linkedInUrl: "https://www.linkedin.com/in/joshua-ryan-29272a349/" },
    { src: AustinCol, line1: "Austin Jayaraj", line2: "Web Master", linkedInUrl: "https://www.linkedin.com/in/austin-jayaraj-a-087200329/" },
    { src: AllenCol, line1: "Allen Joseph G", line2: "Project Head", linkedInUrl: "https://www.linkedin.com/in/allen-joseph-g/" },
    { src: HariniCol, line1: "Harini S", line2: "Event Head", linkedInUrl: "https://www.linkedin.com/in/jakruthee-dev-58498a2b8" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.children);
      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distance = Math.abs(window.innerWidth / 2 - centerX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-6 lg:pl-[61px] lg:pr-[77px] pb-8 lg:pb-[64px]">
      <div className="font-inter flex flex-col gap-4 items-start lg:w-full">
        <span className="font-bold text-lg lg:text-[22px] text-black">
          Driving Change, Leading the Charge
        </span>
        <span className="font-normal text-sm lg:text-sm text-[#000000CC] text-justify sm:text-left">
          Our leadership team is dedicated to creating opportunities, fostering growth, and inspiring the next generation of tech leaders. These are the changemakers who guide ACM St. Joseph's Chapter toward success and innovation.
        </span>
      </div>

      <div className="mt-8">
        {/* Mobile Carousel with scroll effect */}
        <div ref={containerRef} className="flex md:hidden gap-6 overflow-x-auto no-scrollbar px-2">
          {members.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-500 flex-shrink-0 ${activeIndex === index
                  ? "scale-110 filter-none"
                  : "scale-95 grayscale"
                }`}
            >
              <HoverImage
                src={member.src}
                line1={member.line2}
                line2={member.line1}
                linkedInUrl={member.linkedInUrl}
                width="w-48"
                height="h-48"
                className="shadow-lg"
                hoverEffect={false} // disable hover for mobile
                grayscaleOnHover={false}
                showTooltip={false} // tooltips not needed on mobile
                rounded={true}
              />
            </div>
          ))}
        </div>

        {/* Desktop Honeycomb layout */}
        <div className="hidden md:flex flex-col gap-3 mt-6">
          {(() => {
            const rows = [];
            let i = 0, toggle = true;
            while (i < members.length) {
              const count = toggle ? 7 : 6;
              rows.push(members.slice(i, i + count));
              i += count;
              toggle = !toggle;
            }
            return rows.map((row, rowIndex) => (
              <div key={rowIndex} className={`flex justify-center gap-3 ${row.length === 6 ? "ml-10 mr-10" : ""}`}>
                {row.map((member, index) => (
                  <HoverImage
                    key={index}
                    src={member.src}
                    line1={member.line2}
                    line2={member.line1}
                    linkedInUrl={member.linkedInUrl}
                    width="w-64"
                    height="h-64"
                    className="shadow-lg"
                    grayscaleOnHover={true}
                    hoverEffect={true}
                    showTooltip={true}
                    rounded={true}
                  />
                ))}
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};

export default Members;
