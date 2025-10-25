import React, { useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";

function Fot() {
  const navigationData = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "About",
      href: "#about", // Changed href to match the id of about section
    },
    {
      name: "Services",
      href: "#service", // Assuming there's an app section with id="app"
    },
    {
      name: "Projects",
      href: "#clients",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    navigationData.forEach((item) => {
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

  return (
    <div>
      <div id="contact" className="hidden lg:block">
        <div className="w-[100%] pt-20">
          <img src=" /assets/foot1.png" className="" alt="" />
        </div>
        <div className="bg-[#030202] w-[100%] h-[310px]">
          <div className="max-w-7xl mx-auto">
            <div className=" flex justify-center items-center space-x-4 pt-10">
              <div className="w-[30%] pr-10">
                <div className="flex justify-center items-center">
                  <div className="w-[30%]">
                    <img src=" /assets/logo2.png" className="" alt="" />
                  </div>
                  <div className="text-center pl-6 pt-4">
                    <h1 className="text-xl text-white font-PO font-bold">
                      ZENTH TECHNOLOGY
                    </h1>
                    <div className="pt-2">
                      <div className="h-[1px] bg-gray-200 w-[100%]"> </div>
                    </div>

                    <h1 className="text-lg pt-2 text-white font-OS font-normal">
                      IT Softwares & Solutions
                    </h1>
                  </div>
                </div>
              </div>

          
              <div className="w-[20%] h-[200px] pl-4">
                <div>
                  <h1 className="text-xl text-white font-PO font-bold">
                    Information
                  </h1>

                  <ul className=" space-y-2 pt-4">
                    {navigationData.map((item, index) => (
                      <li key={index}>
                        <a
                          className="text-white hover:underline"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-[20%]  h-[200px]">
                <div>
                  <h1 className="text-xl text-white font-PO font-bold">
                    Contact info
                  </h1>
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-items-start items-center space-x-4">
                      <div className="w-[8%]">
                        <img src=" /assets/sm1.png" className="" alt="" />
                      </div>

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        +91 807-2875-342
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                      <div className="w-[8%]">
                        <img src=" /assets/sm2.png" className="" alt="" />
                      </div>

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        zenthtech@gmail.com
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                      <div className="w-[8%]">
                        <img src=" /assets/sm3.png" className="" alt="" />
                      </div>

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        www.zenth.tech
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                      <div className="w-[8%]">
                        <img src=" /assets/sm4.png" className="" alt="" />
                      </div>

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        Bangalore, India
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[20%] h-[200px]">
                <div>
                  <h1 className="text-xl text-white font-PO font-bold">
                    Follow us
                  </h1>

                  <div className="flex justify-items-start items-center space-x-4 pt-4">
                    <div className="w-[8%]">
                      <img src=" /assets/fl1.png" className="" alt="" />
                    </div>

                    <div className="w-[6%]">
                      <img src=" /assets/fl2.png" className="" alt="" />
                    </div>

                    <div className="w-[8%]">
                      <img src=" /assets/fl3.png" className="" alt="" />
                    </div>

                    <div className="w-[8%]">
                      <img src=" /assets/fl4.png" className="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <div className="h-[1px] bg-gray-300 w-[68%]"></div>
            </div>

            <div className="flex justify-center pt-4">
              <h1 className="text-xs text-white font-OS font-normal">
                Copyright 2024 © ZENTH Tech Pvt Ltd. All right reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="">
        <div id="footer" className="lg:hidden">
          <div className="w-[100%] pt-20">
            <img src=" /assets/foot2.png" className="" alt="" />
          </div>
          <div className="bg-[#030202] w-[100%] h-[500px]">
            <div className="max-w-7xl mx-auto">

            <div className="flex  pt-6 pl-4">
                  <div className="w-[16%]">
                    <img src=" /assets/logo2.png" className="" alt="" />
                  </div>
                  <div className="text-center pl-6 pt-4">
                    <h1 className="text-sm text-white font-PO font-bold">
                      ZENTH TECHNOLOGY
                    </h1>
                    <div className="pt-2">
                      <div className="h-[1px] bg-gray-200 w-[100%]"> </div>
                    </div>

                    <h1 className="text-sm pt-2 text-white font-OS font-normal">
                      IT Softwares & Solutions
                    </h1>
                  </div>
                </div>


                <div className="  pl-6 pt-10">
             
    <div className="flex ">
        <h1 className="text-2xl text-white font-PO font-bold">
            Follow us
        </h1>
    </div>

    <div className="flex  space-x-4 pt-4">
        <div className="w-[6%]">
            <img src="/assets/fl1.png" alt="" />
        </div>
        <div className="w-[4%]">
            <img src="/assets/fl2.png" alt="" />
        </div>
        <div className="w-[6%]">
            <img src="/assets/fl3.png" alt="" />
        </div>
        <div className="w-[6%]">
            <img src="/assets/fl4.png" alt="" />
        </div>

</div>

              </div>

<div className="">
<div className="flex pl-6">

<div className=" pt-12">
                <div>
                  <h1 className="text-lg text-white font-PO font-bold">
                    Contact info
                  </h1>
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-items-start items-center space-x-4">
                    

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        +91 807-2875-342
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                  

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        zenthtech@gmail.com
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                    

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        www.zenth.tech
                      </h1>
                    </div>

                    <div className="flex justify-items-start items-center space-x-4">
                      {/* <div className="w-[4%]">
                        <img src=" /assets/sm4.png" className="" alt="" />
                      </div> */}

                      <h1 className="text-sm pt-2 text-white font-OS font-normal">
                        Bangalore, India
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

{/* 
<div className=" pt-10 ">
                <div>
                  <h1 className="text-xl text-white font-PO font-bold">
                    Information
                  </h1>

                  <ul className=" space-y-2 pt-4">
                    {navigationData.map((item, index) => (
                      <li key={index}>
                        <a
                          className="text-white hover:underline"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}



              


</div>
             
</div>



<div className="flex justify-center pt-6">
              <div className="h-[1px] bg-gray-300 w-[72%]"></div>
            </div>

            <div className="flex justify-center pt-4">
              <h1 className="text-xs text-white font-OS font-normal">
                Copyright 2024 © ZENTH Tech Pvt Ltd. All right reserved.
              </h1>
            </div>

            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
    </div>
  );
}

export default Fot;
