import React from "react";
import Img1 from "../../assets/car3.png";
import Img2 from "../../assets/white-car.png";
import Img3 from "../../assets/car4.png";
import Image from "next/image";
const ServiceData = [
  {
    id: 1,
    img: Img1,
    name: "Economy Class",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt eaque debitis rem",
    aosDeploy: "100",
    price:"10/km"
  },
  {
    id: 2,
    img: Img2,
    name: "Standard Class",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt eaque debitis rem",
    aosDeploy: "300",
    price:"$20/km"
  },
  {
    id: 3,
    img: Img3,
    name: "Business Class",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt eaque debitis rem",
    aosDeploy: "500",
    price:"$30/km"
  },
];
const BestCars = () => {
  return (
    <div className="py-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="container">
        {/* Header Title Section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Choose Best Cab
          </h1>
        </div>

        {/**Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-10 gap-14 place-items-center">
          {ServiceData.map((item) => {
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.aosDeploy}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:!bg-primary duration-200 max-w-[300px] relative "
              >
                {/**Image section */}
                <div className="h-[100px]">
                  <Image
                    src={item.img}
                    alt="car"
                    className="h-[100%] sm:h-[130px] max-w-[200px] block mx-auto tranform -translate-y-10 group-hover:scale-110 group-hover:translate-x-4 duration-300 text-center"
                  />
                </div>
                {/**Text Section */}
                <div className="p-4 text-center space-y-4">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.name}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 group-hover:text-black duration-300 text-sm line-clamp-2">
                    {item.Description}
                  </p>
                  <p className="text-primary text-2xl font-bold group-hover:text-black">
                    {item.price}
                  </p>
                <button className="bg-black text-white px-4 py-2 rounded-xl">
                  Read More
                </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestCars;
