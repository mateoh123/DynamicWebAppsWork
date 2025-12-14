import React from "react";
import { Link } from "react-router-dom";
import UploadClothes from "../clothe_images/IconsandButtons/UploadClothesButton.png";
import CreateOutfit from "../clothe_images/IconsandButtons/CreateOutfitButton.png";

const GeneralCreateModal = ({ onClose, openClothesModal }) => {
  return (
    <div
      className="fixed z-50 inset-0 bg-stone-500/50 flex items-center justify-center "
      onClick={onClose}
    >
      <div
        className="bg-white px-10  gap-x-8 rounded-md mb-24 border-[3px] border-[#41403E] [border-top-left-radius:255px_15px] [border-top-right-radius:15px_225px] [border-bottom-right-radius:225px_15px] [border-bottom-left-radius:15px_255px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-x-8 ">
          <Link to="/outfitcreationpage">
            <button
              className="  w-[200px] h-[200px] hover:scale-105 transition-transform"
              onClick={onClose}
            >
              <img src={CreateOutfit} alt="Create Outfit Button" />
            </button>
          </Link>

          <button
            className="  w-[200px] h-[200px] hover:scale-105 transition-transform"
            onClick={openClothesModal}
          >
            <img src={UploadClothes} alt="Upload Clothes Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralCreateModal;
