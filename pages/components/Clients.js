import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
// import required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

function Clients() {
  return (
    <div>
      <div id="clients" className="hidden lg:block">
        <div className="max-w-7xl mx-auto pt-10">
          <div className="flex justify-center space-x-2">
            <h1 className=" text-4xl font-PO text-[#008080] font-black">
              Meet
            </h1>
            <h1 className=" text-4xl font-PO text-gray-500 font-black">Our</h1>
            <h1 className=" text-4xl font-PO text-[#008080] font-black">
              Clients
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-center text-lg pt-2 font-OS">
              Clients at the Heart of Our Success
            </p>
          </div>

          <div className="pt-10">
            <div className="flex justify-center space-x-[10%]">
              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client1.png" className="" alt="" />
              </div>

              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client2.png" className="" alt="" />
              </div>

              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client3.png" className="" alt="" />
              </div>

              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client5.png" className="" alt="" />
              </div>
            </div>

            <div className="flex justify-center space-x-[10%] pt-4">
              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client6.png" className="" alt="" />
              </div>
              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client4.png" className="" alt="" />
              </div>
              <div className="w-[12%] pt-10 grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src=" /assets/client7.png" className="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden max-w-7xl mx-auto pt-20">
        <div className="flex justify-center space-x-2">
          <h1 className=" text-4xl font-PO text-[#008080] font-black">Meet</h1>
          <h1 className=" text-4xl font-PO text-gray-500 font-black">Our</h1>
          <h1 className=" text-4xl font-PO text-[#008080] font-black">
            Clients
          </h1>
        </div>
        <div>
          <p className="text-gray-500 text-center text-base pt-2 font-OS">
            Clients at the Heart of Our Success
          </p>
        </div>

        <div className="pt-2 ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}

            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client6.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client1.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client2.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client3.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client4.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client5.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="w-[50%] pt-10 ">
                  <img src=" /assets/client7.png" className="" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* mobile */}
    </div>
  );
}

export default Clients;
