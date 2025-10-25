import React, { useEffect } from "react";

function Hero() {
  const navigationData = [
    {
      name: "Explore more",
      href: "#about", // Changed href to match the id of about section
    },
  ];

  const navigationDa = [
    {
      name: "Get in touch",
      href: "#footer", // Changed href to match the id of about section
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

  const openEmail = () => {
    const emailId = "zenthtech@gmail.com";
    const subject = "";
    const emailUrl = `mailto:${emailId}?subject=${encodeURIComponent(subject)}`;

    // Open email in new tab
    window.open(emailUrl, "_blank");
  };

  return (
    <>
      <div>
        <div id="hero" className="hidden lg:block">
          <div className=" max-w-7xl mx-auto pt-20 ">
            <div className="flex justify-center items-center">
              <div className="w-[40%]">
                <div className="flex gap-x-4">
                  <h1 className=" text-4xl font-PO text-gray-500 font-black">
                    Unveil
                  </h1>
                  <h1 className=" text-4xl font-PO text-[#008080] font-black">
                    Next-Gen
                  </h1>
                </div>
                <h1 className="text-4xl font-PO text-gray-500 font-black">
                  Tech Synergy
                </h1>

                <div>
                  <div className="flex space-x-2 pt-4">
                    <h1 className=" text-2xl font-OS text-[#008080] font-semibold">
                      Step Inside
                    </h1>
                    <h1 className=" text-2xl font-OS text-gray-500 font-semibold">
                      Your Future with Us
                    </h1>
                  </div>

                  <div className="flex pt-4">
                    <h1 className=" text-lg font-OS text-gray-500 font-normal pr-4">
                      Experience the future of tech at ZENTH TECHNOLOGIES Our
                      unique approach merges hardware and software seamlessly,
                      delivering unparalleled innovation to propel your business
                      forward.
                    </h1>
                  </div>

                  <div className="flex space-x-8 pt-6">
                    {navigationData.map((item, index) => (
                      <button
                        key={index}
                        className="bg-transparent  bg-white border-[#008080] text-[#008080] h-[40px] font-MO py-2 px-4 border font-normal"
                      >
                        <a href={item.href}>{item.name}</a>
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

                    <button
                      onClick={openEmail}
                      className="bg-transparent bg-white shadow-md h-[40px] font-MO  text-gray-500 py-2 px-4 border font-normal"
                    >
                      Let’s Connect
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[60%]">
                <video
                  className="w-[100%] select-none "
                  autoPlay
                  loop
                  muted
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/gift-c0314.appspot.com/o/Next-Gen%202.mp4?alt=media&token=d203e8e9-4078-4c66-aa5d-2c62d0d7fdac"
                    type="video/mp4"
                  />
                </video>

                {/* <img src=" /assets/hero1.png" className="" alt="" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="pt-20">
          <div className="lg:hidden max-w-7xl mx-auto ">
            <div className="flex gap-x-4 text-center justify-center pt-10">
              <h1 className=" text-3xl font-PO text-gray-500 font-black">
                Unveil
              </h1>
              <h1 className=" text-3xl font-PO text-[#008080] font-black">
                Next-Gen
              </h1>
            </div>

            <div className="flex space-x-2 pt-4 justify-center">
              <h1 className=" text-2xl font-OS text-[#008080] font-semibold">
                Step Inside
              </h1>
              <h1 className=" text-2xl font-OS text-gray-500 font-semibold">
                Your Future with Us
              </h1>
            </div>

            <div className=" text-center pt-4 pl-4 pr-4">
              <h1 className=" text-base font-OS text-gray-500 font-normal pr-4">
                Experience the future of tech at ZENTH TECHNOLOGIES Our unique
                approach merges hardware and software seamlessly, delivering
                unparalleled innovation to propel your business forward.
              </h1>
            </div>

            <div className="flex space-x-8 justify-center pt-10">
              {navigationDa.map((item, index) => (
                <button
                  key={index}
                  className="bg-transparent bg-white border-[#008080] text-[#008080] h-[40px] font-MO  py-2 px-4 border font-normal"
                >
                  <a href={item.href}>{item.name}</a>
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

              <button
                onClick={openEmail}
                className="bg-transparent bg-white shadow-md h-[40px] font-MO  text-gray-500 py-2 px-4 border font-normal"
              >
                Let’s Connect
              </button>
            </div>

            <div className="pt-4">
              <video
                className="w-[100%]"
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/gift-c0314.appspot.com/o/Next-Gen%202.mp4?alt=media&token=d203e8e9-4078-4c66-aa5d-2c62d0d7fdac"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        {/* Mobile */}
      </div>
    </>
  );
}

export default Hero;
