import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0e8ec2] text-white py-6 px-6 md:px-16 font-inter">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

        {/* Left: Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/acm-sjce/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0e8ec2] hover:bg-gray-100 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.instagram.com/acm_sjce?igsh=MXZ0YmE0MnR3cDI4OA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0e8ec2] hover:bg-gray-100 transition"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="mailto:acm@stjosephs.ac.in"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0e8ec2] hover:bg-gray-100 transition"
          >
            <MdEmail size={18} />
          </a>
        </div>

        {/* Center: Chapter Name */}
        <p className="text-sm md:text-base font-semibold text-center">
          © With 💙 from ACM Student Chapter
        </p>

        {/* Right: Credits */}
        <p className="text-xs text-center md:text-right leading-relaxed">
          WEBSITE CREDITS: DESIGNED BY{" "}
          <a
            href="https://www.linkedin.com/in/tharun-c-6b7a89290"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline-offset-2 hover:underline"
          >
            THARUN C
          </a>{" "},<br /> DEVELOPED BY{" "}
          <a
            href="https://www.linkedin.com/in/adithya-suresh-3a93b825a"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline-offset-2 hover:underline"
          >
            ADITHYA M S
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
