import React from 'react'
import FacultyComponent from './FacultyComponent'

import facultyAdvisorImg from '../../assets/facultyadvisor.svg'
import facultySponsorImg from '../../assets/facultysponsor.svg'

const Faculties = () => {
  return (
    <><center><h1 id="about" className='font-bold text-4xl mb-16 text-[#15ade5] underline underline-offset-4
'>Our Faculties</h1></center>
    <div className="flex gap-[51px] px-[51px] items-start justify-between pb-[83px]">

      <FacultyComponent
        heading="Our Faculty Advisor"
        content={<span>
          <span className="font-bold">Dr. V. Muthulakshmi</span>, HOD Department of Computer Science and
          Engineering has been a part of St. Joseph’s College of Engineering for 30 years, with a focus
          on Computer Science and Engineering. She holds a PhD in Computer Science from Anna University.
          With extensive experience in Artificial Intelligence, Machine Learning, and Distributed
          Systems, she brings a wealth of knowledge to our ACM chapter.
        </span>}
        image={facultyAdvisorImg}
        line1="Faculty Advisor"
        line2="Dr. V. Muthulakshmi" />


      <FacultyComponent
        heading="Our Faculty Sponsor"
        content={<span> <span className='font-bold'>Dr. B. Uma Maheswari</span> is a seasoned academic and researcher with over 22 years of teaching experience in the Department of Computer Science and Engineering at St. Joseph’s College of Engineering. Her research interests primarily focus on Machine Learning and Artificial Intelligence. She has been instrumental in mentoring students to excel in prestigious competitions such as the Smart India Hackathon.</span>}
        image={facultySponsorImg}
        line1="Faculty Sponsor"
        line2="Dr. B. Uma Maheswari" />
    </div></>
  )
}

export default Faculties
