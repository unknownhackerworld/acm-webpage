import karstonCol from '../../assets/members/color/karstoncol.svg';
import kavinCol from '../../assets/members/color/kavincol.svg';
import vidurCol from '../../assets/members/color/vidurcol.svg';
import shobikaCol from '../../assets/members/color/shobikacol.svg';
import ruthCol from '../../assets/members/color/ruthcol.svg';
import alanbabuCol from '../../assets/members/color/alanbabuCol.svg';
import akshayaCol from '../../assets/members/color/akshayaCol.svg';
import JoshuaRyanCol from '../../assets/members/color/JoshuaRyanCol.svg';
import AustinCol from '../../assets/members/color/AustinCol.svg';
import AllenCol from '../../assets/members/color/AllenCol.svg';
import noProfile from '../../assets/members/color/noprofile.svg';
import JasmineCol from '../../assets/members/color/JasmineCol.svg';
import HoverImage from './HoverImage';

const Members = () => {
  const members = [
    { src: kavinCol, line1: "Kavin Thangamani", line2: "Chairperson", linkedInUrl: 'https://www.linkedin.com/in/kavin-thangamani-019487283' },
    { src: JasmineCol, line1: "Jasmine Ramola J", line2: "Vice - Chairperson", linkedInUrl: 'https://www.linkedin.com/in/jasmine-ramola-j'},
    { src: karstonCol, line1: "Karston", line2: "Secretary" },
    { src: noProfile, line1: "Junaid", line2: "Joint - Secretary", linkedInUrl: 'https://www.linkedin.com/in/junaid-abdul-alim-07a599311' },
    { src: shobikaCol, line1: "Shobika D", line2: "Research Head", linkedInUrl:"https://www.linkedin.com/in/shobika-dayanidhi" },
    { src: vidurCol, line1: "Vidur Varshan", line2: "Membership Chair", linkedInUrl: "https://www.linkedin.com/in/vidur-varshan-332311298" },
    { src: ruthCol, line1: "Ruth J", line2: "Treasurer", linkedInUrl: 'https://www.linkedin.com/in/ruth--john/' },
    { src: alanbabuCol, line1: "Alan Babu K", line2: "Technical Head", linkedInUrl: 'https://www.linkedin.com/in/alan-babu-48784632b/' },
    { src: akshayaCol, line1: "Akshaya Magesh", line2: "Design Head", linkedInUrl:"https://www.linkedin.com/in/akshaya-magesh-83b40a331/" },
    { src: JoshuaRyanCol, line1: "Joshua Ryan", line2: "Social Media Head", linkedInUrl: 'https://www.linkedin.com/in/joshua-ryan-29272a349/' },
    { src: AustinCol, line1: "Austin Jayaraj", line2: "Web Master", linkedInUrl: "https://www.linkedin.com/in/austin-jayaraj-a-087200329/" },
    { src: AllenCol, line1: "Allen Joseph G", line2: "Project Head", linkedInUrl: 'https://www.linkedin.com/in/allen-joseph-g/' },
    { src: noProfile, line1: "Harini S", line2: "Event Head", linkedInUrl: "https://www.linkedin.com/in/jakruthee-dev-58498a2b8" },    
  ];

  const rows = [];
  let i = 0;
  let toggle = true;
  while (i < members.length) {
    const count = toggle ? 7 : 6;
    rows.push(members.slice(i, i + count));
    i += count;
    toggle = !toggle;
  }

  return (
    <div id='people' className="px-6 lg:pl-[61px] lg:pr-[77px] pb-8 lg:pb-[64px]">
      <div className="font-inter flex flex-col gap-4 items-start xl:w-[56%] lg:w-full">
        <span className="font-bold text-lg lg:text-[22px] text-black">
          Driving Change, Leading the Charge
        </span>
        <span className="font-normal text-sm lg:text-sm text-[#000000CC] text-justify sm:text-left">
          Our leadership team is dedicated to creating opportunities, fostering growth, and inspiring the next generation of tech leaders. These are the changemakers who guide ACM St. Joseph's Chapter toward success and innovation.
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-1 ${row.length === 6 ? "ml-10 mr-10" : "" // shift 6-member rows to center between 7-member rows
              }`}
          >
            {row.map((member, index) => (
              <HoverImage
                key={index}
                src={member.src}
                line1={member.line1}
                line2={member.line2}
                linkedInUrl={member.linkedInUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
