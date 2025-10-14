import cx from "classnames";
import PropTypes from "prop-types";

const TitleSection = () => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={require("../assets/myhead.png")}
          alt="''"
          className="h-96 w-96"
        ></img>
        <div>
          <h1 className="text-[10rem] flex ">Mateo</h1>
          <p className="text-[2rem]">
            Description Text; Portfolio Section Info
          </p>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
