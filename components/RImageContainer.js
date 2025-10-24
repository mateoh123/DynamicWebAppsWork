import React from "react";

const RandomImageContainer = ({ children }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {children}
    </div>
  );
};

export default RandomImageContainer;
