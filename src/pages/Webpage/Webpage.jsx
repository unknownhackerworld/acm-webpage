import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Banner from '../Webpage/Banner';
import OurEvents from '../Webpage/OurEvents';
import Members from '../Webpage/Members';
import Gallery from '../Webpage/Gallery';
import Faculties from '../Webpage/Faculties';
import FacultyAdvisor from '../Webpage/FacultyAdvisor';
import FacultySponsor from '../Webpage/FacultySponsor';
import CurrentEvents from './CurrentEvents';
import Footer from './Footer';
import SectionDivided from '../../components/SectionDivided';
import Logo from "../../assets/logo.png";

const Webpage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setLoading(false), 1000); // delay for wipe animation
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 200;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* Loader Screen */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[#15ade5] z-[9999] transform transition-transform duration-1000 ${loading ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <img src={Logo} alt="Logo" className="w-32 md:w-48 animate-pulse" />
      </div>

      {/* Main Content */}
      <div>
        <Header scrollToSection={scrollToSection} />
        <Banner />
        <OurEvents />
        <Members />
        {/* <Gallery /> */}
        <SectionDivided />
        <Faculties />
        {/* <FacultyAdvisor />
        <FacultySponsor /> */}
        <SectionDivided />
        <CurrentEvents />
        <Footer />
      </div>
    </div>
  );
};

export default Webpage;
