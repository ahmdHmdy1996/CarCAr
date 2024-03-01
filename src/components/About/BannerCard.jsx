import React from "react";

const BannerCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-[350px] mx-auto ">
      <div className="flex items-center gap-4">
        <div>
          <span className="h-[60px] w-[60px] rounded-full text-black bg-primary flex items-center justify-center">
            {icon}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
