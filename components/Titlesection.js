import React from "react";
import RandomImageContainer from "./RImageContainer";
// import RandomImageScatter from "./RandomImagesCode";

const TitleSection = ({ title, description }) => {
  return (
    <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden">
      <RandomImageContainer>
        <div className="relative z-0 text-center text-stone-50">
          <h1 className="text-[8rem] font-source_san_3 leading-none font-bold scale-x-125 scale-y-55">
            {title}
          </h1>
          <p className="text-[2rem] mt-4">{description}</p>
        </div>
        {/* <RandomImageScatter /> */}
      </RandomImageContainer>
    </div>
  );
};

export default TitleSection;
