import React, { useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import Logo from "../../assets/logo.png";

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = ["home", "people", "about", "events", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "people", label: "People" },
    { id: "about", label: "About Us" },
    { id: "events", label: "Events" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#FFFFFFB2] backdrop-blur-md py-2" : "bg-white py-2"
        }`}
    >
      <div className="flex items-center justify-between px-5 ">
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            {isMenuOpen ? (
              <X
                className="w-6 h-6 cursor-pointer z-20 relative"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 cursor-pointer z-20 relative"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          <div className="md:pl-24">
            <img src={Logo} alt="Logo" className={`transition-all ${isScrolled ? "md:w-48" : "md:w-52"}`} />
          </div>
        </div>

        <div className="lg:flex hidden font-inter font-semibold text-md text-black gap-12 pr-[92px]">
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`relative cursor-pointer transition-colors pb-1
                ${activeSection === item.id
                  ? "text-[#15ade5]"
                : "hover:text-[#15ade5]"
                }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#15ade5] transition-all duration-300 ease-out
                  ${activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </span>
          ))}
        </div>

        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-md transform transition-all duration-500 ease-in-out lg:hidden z-10 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
        >
          <div className="flex flex-col items-center space-y-6 py-6 px-5 font-inter">
            {navItems.map((item) => (
              <span
                key={item.id}
                className={`text-lg font-semibold cursor-pointer ${activeSection === item.id ? "text-[#15ade5]" : "text-black"
                  }`}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
