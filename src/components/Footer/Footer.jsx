import React from "react";
import {
  FaAndroid,
  FaAppStoreIos,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/**Upper Section */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4 ">
          <p>We are Ready To Take Your Call 24 Hour, 7 Days!</p>
          <h1 className="text-3xl md:text-5xl font-bold">+20123456789</h1>
        </div>
      </div>

      {/**Bottom Section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/** First Col */}
        <div className="space-y-6">
          {/** Heading */}
          <h2 className="text-2xl py-3 font-bold capitalize border-b-8 border-primary">
            About CarCar
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            possimus nihil deleniti veniam a doloribus, esse ab incidunt nobis
            cupiditate nemo temporibus voluptates adipisci maxime praesentium
            autem, alias sequi obcaecati.
          </p>
          {/** Social Links */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        {/** Second Col */}
        <div className="space-y-6">
          <h2 className="text-2xl py-3 font-bold capitalize border-b-8 border-primary">
            Download
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            possimus nihil deleniti veniam a doloribus, esse ab incidunt nobis
            cupiditate nemo temporibus voluptates adipisci maxime praesentium
            autem, alias sequi obcaecati.
          </p>
          <h2 className="text-primary  text-xl font-semibold flex items-center gap-4 ">
            Android user{" "}
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h2>
          <h2 className="text-primary  text-xl font-semibold flex items-center gap-4 ">
            IOS user{" "}
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h2>
        </div>

        {/** Third Col */}
        <div className="space-y-6">
          <h2 className="text-2xl py-3 font-bold border-b-8 border-primary">Contact</h2>
          <div className="flex items-center gap-4"> <FaMapMarker/> 22 Street, Cairo, Egypt</div>
          <div className="flex items-center gap-4"> <MdCall/> +20123456789</div>
          <div className="flex items-center gap-4"> <MdEmail/> carcar@example.com</div>
          <div className="flex items-center gap-4"> <FaMousePointer/> www.carcar.com</div>
        </div>
      </div>
      <p className="text-center py-4 text-sm">Copyright © 2023 . All rights reserved  </p>
    </div>
  );
};

export default Footer;
