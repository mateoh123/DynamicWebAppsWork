import React, { useEffect } from "react";
import ClothesCreate from "./ClothesCreate";
import axios from "axios";

const CreateClothesModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const createClothes = async (newClothe) => {
    await axios.post("http://localhost:3001/clothes", newClothe);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className=" bg-white h-5/6 overflow-y-auto border-[3px] border-[#41403E] [border-top-left-radius:255px_15px] [border-top-right-radius:15px_225px] [border-bottom-right-radius:225px_15px] [border-bottom-left-radius:15px_255px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <h1 className="font-handwriting text-4xl font-bold text-center">
            Create Clothes
          </h1>
          <ClothesCreate onCreate={createClothes} />
        </div>
      </div>
    </div>
  );
};

export default CreateClothesModal;
