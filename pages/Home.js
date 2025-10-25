import React from "react";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Clients from "./components/Clients";
import Why from "./components/Why";
import Fot from "./components/Fot";

export default function Home() {

    const navigationDa = [
   
        {
          name: "Get in touch",
          href: "#foot", // Changed href to match the id of about section
        },

      ];



  const [navMobile, setNavMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect(() => {
  //     const aboutLink = document.querySelector('a[href="#about"]');
  //     aboutLink.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       const aboutSection = document.getElementById('about');
  //       aboutSection.scrollIntoView({ behavior: 'smooth' });
  //     });
  //   }, []);

  
  useEffect(() => {
    navigationDa.forEach((item) => {
      const link = document.querySelector(`a[href="${item.href}"]`);
      if (link) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const sectionId = item.href.substring(1); // Remove the # to get the section ID
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <div
        className={`fixed w-full top-0 z-10 transition-all h-[55px] lg:h-[56px] flex items-center ${
          isScrolled ? " bg-slate-50 shadow-lg" : "bg-slate-50"
        }`}
    
      >
        <div className="container mx-auto max-w-7xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[20px]">
              <a href="#">
                <img
                  src=" /assets/logo.png"
                  className="h-[40px] pl-4 lg:pl-0 lg:h-[50px]"
                  alt=""
                />
              </a>
              <h1 className="text-[#008080] font-K font-bold text-xl">
                Zenth Tech
              </h1>
            </div>
            {/* nav initially hidden only show large screen */}
            <div className="hidden lg:flex  text-xl">
              <Nav />
            </div>

            <div className="hidden lg:flex">
                    {navigationDa.map((item, index) => (

<button key={index} className="bg-transparent hover:bg-[#008080] text-[#008080] font-semibold hover:text-white font-MO py-2 px-4 border border-[#008080] hover:border-transparent rounded">
    <a href={item.href}>
    {item.name}
    </a>

 </button>
        // <li key={index}>
        //   <a
        //     className="text-black hover:text-cyan-600"
        //     href={item.href}
        //   >
        //     {item.name}
        //   </a>
        // </li>
      ))}
            </div>
          </div>
        </div>
      </div>

      {/* <nav className="flex justify-end p-4">
        <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
      </nav> */}

      {/* <header
        id="home"
        className="h-screen flex items-center justify-center bg-gray-200"
      >
      
      </header> */}

      {/* <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section> */}
  
  <div>
      <Hero/>
      </div>
    
    <div>
        <About/>
        </div>   
   
        <div >
        <Service/>
        </div>   

        <div >
        <Clients/>
        </div>  

        
        <div className="pt-20">
       <Why/>
        </div> 

        <div id="foot">
        <Fot/>
        </div> 

    </div>
  );
}
