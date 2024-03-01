import React from "react";
import { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "https://raw.githubusercontent.com/ahmdHmdy1996/CarCAr/main/src/assets/yellowcar.png";
import bgCity from "../../assets/bgCity.jpg";
import AOS from "aos";
import Image from "next/image";


const bgStyle = {
  backgroundImage: `url(${bgCity.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100%",
};

const Hero = () => {
  return (    
    <div style={bgStyle}>
      <div className="dark:bg-black/60  bg-white/20 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
        <div className="container grid grid-cols-1 place-items-center">
          {/* text content section */}
          <div className="text-center space-y-5 py-14">
            <p
              data-aos="fade-up"
              className="dark:text-primary text-3xl font-semibold uppercase text-orange "
            >
              Book Cab Now
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl md:text-6xl font-bold"
            >
              +20123456789
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="tracking-[8px] text-base sm:text-xl font-semibold"
            >
              www.yourdomain.com
            </p>
          </div>
          {/* image section */}
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <Image
              src={yellowCar}
              alt="yellow car"
              className="max-h-[450px] sm:scale-100 translate-y-10 sm:translate-y-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
