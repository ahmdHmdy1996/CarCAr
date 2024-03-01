import React from "react";
import pers1 from "../../assets/per1.jpg";
import pers2 from "../../assets/per2.jpg";
import pers3 from "../../assets/per3.jpg";
import BgImage from "../../assets/many.webp";
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
      text: "I love this car! It's so comfortable and easy to drive.",
      author: "John Doe",
      img:pers1,
    },
    {
      id: 2,
      text: "This car is a game-changer. It has amazing features and performs incredibly well.",
      author: "Jane Smith",
      img:pers2,
    },
    {
      id: 3,
      text: "I highly recommend this car to anyone looking for a reliable and stylish vehicle.",
      author: "Mike Johnson",
      img:pers3,
    },
    {
      id: 1,
      text: "I love this car! It's so comfortable and easy to drive.",
      author: "John Doe",
      img:pers1,
    },
    {
      id: 2,
      text: "This car is a game-changer. It has amazing features and performs incredibly well.",
      author: "Jane Smith",
      img:pers2,
    },
    {
      id: 3,
      text: "I highly recommend this car to anyone looking for a reliable and stylish vehicle.",
      author: "Mike Johnson",
      img:pers3,
    },
  ];

  //slider config
  const  settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          infinite:true
        }
      },
      {
        breackpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:2
        }
      }
      
    ]
  }
    
  return (
    <div className={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className="container">
          {/**Header Section*/}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold capitalize">customer testimonials </h1>
          </div>
          {/** Testimonial section */}
          <div data-aos="zoom-in" >
            <Slider {...settings}>
              {TestimonialsData.map(({id, text, author, img}) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative h-[160px]">
                      {/**contect section */}
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xs h-[50px]">
                          {text}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 "> 
                        <Image
                          src={img}
                          alt={author}
                          className="rounded-full h-16 w-16"
                        />
                        <div className="space-y-2"> 
                          <h1 className="text-xl font-bold text-black/60 dark:text-primary font-cursive">
                            {author}
                          </h1>
                        </div>
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
