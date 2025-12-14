import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralCreateModal from "./GeneralCreateModal";
import CreateClothesModal from "./CreateClothesModal";
import AddIcon from "../clothe_images/IconsandButtons/AddIcon.png";
import OutfitIcon from "../clothe_images/IconsandButtons/PolaroidIcon.png";
import LibraryIcon from "../clothe_images/IconsandButtons/closeticon.png";

const NavBar = () => {
  const [generalModalOpen, setGeneralModalOpen] = useState(false);
  const [clothesModalOpen, setClothesModalOpen] = useState(false);

  const circleBtn =
    "flex items-center justify-center rounded-full bg-black/20 w-32 h-32 backdrop-blur-sm hover:scale-105 transition-transform";

  return (
    <>
      {generalModalOpen && (
        <GeneralCreateModal
          onClose={() => setGeneralModalOpen(false)}
          openClothesModal={() => {
            setGeneralModalOpen(false);
            setClothesModalOpen(true);
          }}
        />
      )}

      {clothesModalOpen && (
        <CreateClothesModal onClose={() => setClothesModalOpen(false)} />
      )}
      <nav className="fixed z-0  left-1/2 -translate-x-1/2 w-1/3 bottom-8">
        <div className="h-full grid grid-cols-3 items-center justify-items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full h-full"
          >
            <button className={circleBtn}>
              <img
                src={OutfitIcon}
                alt="Home"
                className="w-24 h-24 object-contain"
              />
            </button>
          </Link>

          <div className="-translate-y-10">
            <button
              className={circleBtn}
              onClick={() => setGeneralModalOpen(true)}
            >
              <img
                src={AddIcon}
                alt="Add"
                className="w-24 h-24 object-contain"
              />
            </button>
          </div>
          <Link
            to="/clothinglibrarypage"
            className="inline-flex items-center justify-center w-full h-full"
          >
            <button className={circleBtn}>
              <img
                src={LibraryIcon}
                alt="Library"
                className="w-24 h-24 object-contain"
              />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
