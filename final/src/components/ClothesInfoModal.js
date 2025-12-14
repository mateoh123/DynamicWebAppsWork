import React, { useState, useEffect } from "react";
import axios from "axios";

const ClothesInfoModal = ({ onClose, clothesID }) => {
  const [information, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get("http://localhost:3001/clothes");
      setInfo(response.data.filter((item) => item.id === clothesID));
    };
    fetchInfo();
  }, [clothesID]);

  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="rounded-md bg-white w-96 mb-24 border-[3px] border-[#41403E] [border-top-left-radius:255px_15px] [border-top-right-radius:15px_225px] [border-bottom-right-radius:225px_15px] [border-bottom-left-radius:15px_255px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 font-handwriting">
          <h1 className=" text-3xl">Clothes Info</h1>

          {information.map((info) => (
            <div key={info.id} className="text-2xl">
              <img
                src={info.image}
                alt={info.clothingtype}
                className="w-48 h-auto mb-4"
              />
              <p>
                <strong>Clothing Type:</strong> {info.clothingtype}
              </p>
              <p>
                <strong>Color:</strong> {info.color}
              </p>
              <p>
                <strong>Season:</strong> {info.season}
              </p>
              <p>
                <strong>Occasion:</strong> {info.occasion}
              </p>
              <p>
                <strong>Brand:</strong> {info.brand}
              </p>
              <p>
                <strong>Size:</strong> {info.size}
              </p>
              <p>
                <strong>Material:</strong> {info.material}
              </p>
              <p>
                <strong>Pattern:</strong> {info.pattern}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothesInfoModal;
