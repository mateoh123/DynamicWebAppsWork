import React from "react";
import TitleSection from "../components/Titlesection";

const HomePage = () => {
  return (
    <div>
      <TitleSection
        title="Mateo"
        description="Description Text; Portfolio Section Info"
        image={require("../assets/myhead.png")}
      />
      <TitleSection
        title="Mateo 2"
        description="Description Text; Version 2 Lol"
        image={require("../assets/myhead.png")}
      />
    </div>
  );
};

export default HomePage;
