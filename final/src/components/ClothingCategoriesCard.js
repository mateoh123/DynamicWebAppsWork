import { Link } from "react-router-dom";

const ClothingCategoriesCard = ({ title, image, page }) => {
  return (
    <Link
      to={page}
      className=" cursor-pointer w-80 overflow-hidden flex flex-col"
    >
      <div className="">
        <img
          src={image}
          alt={title}
          className="h-auto transition duration-300 hover:scale-105 transition-transform"
        />
      </div>
    </Link>
  );
};

export default ClothingCategoriesCard;
