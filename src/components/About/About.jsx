"use client";
import React from "react";
import BgImage from "../../assets/street.jpg";
import BannerCard from "./BannerCard";
import { SlStar } from "react-icons/sl";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "520px",
  width: "100%",
};

const About = () => {
  return (
    <div style={bgStyle}>
      <div className="text-white bg-black/60 min-h-[530px] flex items-center py-14">
        <div className="container">
          {/**Header title section */}
          <div className="space-y-3 uppercase text-center">
            <p data-aos="fade-up" className= "text-primary text-2xl font-semibold">We Do Best</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-3xl font-bold"
            >
              Than You Wish
            </h1>
          </div>
          {/**Card Section */}
          <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-8">
              <BannerCard
                title={"fast Booking"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"fast Booking"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                }
                icon={<SlStar />}
              />
            </div>
            <div className="space-y-8">
              <BannerCard
                title={"fast Booking"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"fast Booking"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                }
                icon={<SlStar />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
