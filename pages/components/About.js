import React from "react";

function About() {
  return (
    <div>
      <div className="hidden lg:block">
        <div id="about" className="max-w-7xl mx-auto ">
          <div className="flex justify-center space-x-2">
            <h1 className=" text-4xl font-PO text-[#008080] font-black">Who</h1>
            <h1 className=" text-4xl font-PO text-gray-500 font-black">we</h1>
            <h1 className=" text-4xl font-PO text-[#008080] font-black">
              are ?
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-center text-lg font-OS">
              Discovering Solutions & Creating Impact
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <div className="w-40%">
              <div className="">
                <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[83%] h-[70px]">
                  <div className="w-[12%]">
                    <img src=" /assets/about1.png" className="" alt="" />
                  </div>

                  <div>
                    <h1 className="text-lg font-bold text-gray-600 font-OS">
                      UI & UX Design
                    </h1>
                    <h1 className="text-base font-medium text-gray-600 font-OS">
                      250+ Completed Designs
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[83%] h-[70px]">
                  <div className="w-[12%]">
                    <img src=" /assets/about2.png" className="" alt="" />
                  </div>

                  <div>
                    <h1 className="text-lg font-bold font-OS text-gray-600">
                      Development
                    </h1>
                    <h1 className="text-base font-medium font-OS text-gray-600">
                      300+ Completed Website & Applications
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[83%] h-[70px]">
                  <div className="w-[12%]">
                    <img src=" /assets/about3.png" className="" alt="" />
                  </div>

                  <div>
                    <h1 className="text-lg font-bold font-OS text-gray-600">
                      Digital Marketing
                    </h1>
                    <h1 className="text-base font-medium font-OS text-gray-600">
                      100+ Grown Clients
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[83%] h-[70px]">
                  <div className="w-[12%]">
                    <img src=" /assets/about4.png" className="" alt="" />
                  </div>

                  <div>
                    <h1 className="text-lg font-bold font-OS text-gray-600">
                      Product Shoots
                    </h1>
                    <h1 className="text-base font-medium font-OS text-gray-600">
                      150+ superb Clicks
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="pt-4">
                <h1 className="text-4xl text-black font-PO font-bold">
                  What Can We Do for You?
                </h1>
                <p className="text-gray-500 pt-[46px] font-OS font-normal text-lg">
                  We specialize in mobile and web development, UI/UX design,
                  digital marketing, and graphic design.
                </p>
                <p className="text-gray-500 pt-4 font-OS font-normal text-lg">
                  Our experienced professionals ensure top-notch, tailored
                  solutions.
                </p>
                <p className="text-gray-500 pt-4 font-OS font-normal text-lg">
                  We strive to exceed expectations by understanding and meeting
                  our clients' unique needs.
                </p>

                <div className="flex justify-center space-x-[20%] pt-10 pr-[100px]">
                  <div className="text-center">
                    <h1 className="text-gray-700 font-bold text-5xl font-PO">
                      700+
                    </h1>
                    <p className="text-gray-500 font-normal">
                      Completed projects
                    </p>
                  </div>

                  <div className="text-center">
                    <h1 className="text-gray-700 font-bold text-5xl font-PO">
                      200+
                    </h1>
                    <p className="text-gray-500 font-normal">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="lg:hidden max-w-7xl mx-auto">
        <div className="flex justify-center space-x-2 pt-20">
          <h1 className=" text-4xl font-PO text-[#008080] font-black">Who</h1>
          <h1 className=" text-4xl font-PO text-gray-500 font-black">we</h1>
          <h1 className=" text-4xl font-PO text-[#008080] font-black">are ?</h1>
        </div>

        <div>
          <p className="text-gray-500 text-center text-base font-OS">
            Discovering Solutions & Creating Impact
          </p>
        </div>

        <div className="flex justify-center pt-10">
          <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[90%] h-[70px]">
            <div className="w-[17%]">
              <img src=" /assets/about1.png" className="" alt="" />
            </div>

            <div>
              <h1 className="text-base font-bold text-gray-600 font-OS">
                UI & UX Design
              </h1>
              <h1 className="text-sm font-medium text-gray-600 font-OS">
                250+ Completed Designs
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[90%] h-[70px]">
            <div className="w-[20%]">
              <img src=" /assets/about2.png" className="" alt="" />
            </div>

            <div>
              <h1 className="text-base font-bold text-gray-600 font-OS">
                Development
              </h1>
              <h1 className="text-sm font-medium text-gray-600 font-OS">
                300+ Completed Website & Applications
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[90%] h-[70px]">
            <div className="w-[16%]">
              <img src=" /assets/about3.png" className="" alt="" />
            </div>

            <div>
              <h1 className="text-base font-bold text-gray-600 font-OS">
                Digital Marketing
              </h1>
              <h1 className="text-sm font-medium text-gray-600 font-OS">
                100+ Grown Clients
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="flex items-center  pl-[20px] space-x-[20%] shadow-xl shadow-gray-300 w-[90%] h-[70px]">
            <div className="w-[16%]">
              <img src=" /assets/about4.png" className="" alt="" />
            </div>

            <div>
              <h1 className="text-base font-bold text-gray-600 font-OS">
                Product Shoots
              </h1>
              <h1 className="text-sm font-medium text-gray-600 font-OS">
                150+ superb Clicks
              </h1>
            </div>
          </div>
        </div>

        <div className="pt-16 text-center pl-6 pr-6">
          <h1 className="text-2xl text-black font-PO font-bold">
            What Can We Do for You?
          </h1>
          <p className="text-gray-500 pt-[30px] font-OS font-normal text-base">
            We specialize in mobile and web development, UI/UX design, digital
            marketing, and graphic design.
          </p>
          <p className="text-gray-500 pt-4 font-OS font-normal text-base">
            Our experienced professionals ensure top-notch, tailored solutions.
          </p>
          <p className="text-gray-500 pt-4 font-OS font-normal text-base">
            We strive to exceed expectations by understanding and meeting our
            clients' unique needs.
          </p>

          <div className="flex justify-center space-x-[20%] pt-10">
            <div className="text-center">
              <h1 className="text-gray-700 font-bold text-4xl font-PO">700+</h1>
              <p className="text-gray-500 text-sm font-normal">
                Completed projects
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-gray-700 font-bold text-4xl font-PO">200+</h1>
              <p className="text-gray-500 text-sm font-normal">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
    </div>
  );
}

export default About;

