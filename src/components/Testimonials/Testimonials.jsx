import React from "react";
import pers1 from "../../assets/per1.jpg";
import pers2 from "../../assets/per2.jpg";
import pers3 from "../../assets/per3.jpg";
import BgImage from "../../assets/many.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgStyle = {
  background: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Testimonials = () => {
  const TestimonialsData = [
    {
      id: 1,
      text: "I love this car! It's so comfortable and easy to drive.It has amazing",
      author: "John Doe",
      img: pers1,
    },
    {
      id: 2,
      text: "This car is a game-changer. It has amazing features and performs incredibly well.",
      author: "Jane Smith",
      img: pers2,
    },
    {
      id: 3,
      text: "I highly recommend this car to anyone looking for a reliable and stylish vehicle.",
      author: "Mike Johnson",
      img: pers3,
    },
    {
      id: 4,
      text: "I love this car! It's so comfortable and easy to drive.",
      author: "John Doe",
      img: pers1,
    },
    {
      id: 5,
      text: "This car is a game-changer. It has amazing features and performs incredibly well.",
      author: "Jane Smith",
      img: pers2,
    },
    {
      id: 6,
      text: "I highly recommend this car to anyone looking for a reliable and stylish vehicle.",
      author: "Mike Johnson",
      img: pers3,
    },
  ];

  //slider config
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className="container">
          {/**Header Section*/}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold capitalize">
              customer testimonials{" "}
            </h1>
          </div>
          {/** Testimonial section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialsData.map(({ id, text, author, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col grid shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative  min-h-2 min-w-2">
                      {/**contect section */}
                      <div className="flex flex-col items-center gap-4 mb-6">
                        <p className="text-xs">{text}</p>
                      </div>
                      {/**Image Section */}
                      <div className="flex content-baseline items-center gap-4 mx-auto">  
                        <Image
                          src={img}
                          alt={author}
                          className="rounded-full h-16 w-16"
                        />

                        <h1 className="text-xl font-bold text-black/60 dark:text-primary font-cursive ">
                          {author}
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
