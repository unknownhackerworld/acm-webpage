import React from 'react'
import FacultyComponent from './FacultyComponent'

const Faculties = () => {
  return (
    <div className='flex gap-[51px] px-[51px] items-center justify-between pb-[83px]'>
        <FacultyComponent heading='Our Faculty Advisor' content='Dr. V. Muthulakshmi , HOD Department of Computer Science and Engineering has been a part of St.Joseph’s college of Engineering for [X years], with a focus on [specific field(s) in Computer Science or Engineering]. [He/She/They] holds a [Degree, e.g., PhD, Master’s] in [Field] from [University]. With extensive experience in [mention any specific technologies, research, or industry experience], [he/she/they] bring a wealth of knowledge to our ACM chapter' />
        <FacultyComponent heading='Our Faculty Sponser' content='Dr. V. Muthulakshmi , HOD Department of Computer Science and Engineering has been a part of St.Joseph’s college of Engineering for [X years], with a focus on [specific field(s) in Computer Science or Engineering]. [He/She/They] holds a [Degree, e.g., PhD, Master’s] in [Field] from [University]. With extensive experience in [mention any specific technologies, research, or industry experience], [he/she/they] bring a wealth of knowledge to our ACM chapter' />
    </div>
  )
}

export default Faculties