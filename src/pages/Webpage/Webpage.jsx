import React from 'react'
import Header from '../../components/header/Header';
import Banner from '../Webpage/Banner'
import OurEvents from '../Webpage/OurEvents'
import Members from '../Webpage/Members';
import Gallery from '../Webpage/Gallery'
import Faculties from '../Webpage/Faculties'
import FacultyAdvisor from '../Webpage/FacultyAdvisor'
import FacultySponsor from '../Webpage/FacultySponsor'
import CurrentEvents from './CurrentEvents';
import Footer from './Footer'
import SectionDivided from '../../components/SectionDivided';

const Webpage = () => {

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
    <div className='w-full'>
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
  )
}

export default Webpage