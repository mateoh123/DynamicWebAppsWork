import { useState } from "react";
import React from "react";
import axios from "axios";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import ImageBGRemoved from "./ClothesImageBGRemover";
import CreateButton from "../clothe_images/IconsandButtons/CreateClothesButton.png";
import {
  clothingtypeOptions,
  colorOptions,
  seasonOptions,
  occasionOptions,
  brandOptions,
  sizeOptions,
  materialOptions,
  patternOptions,
} from "../option_data/data.ts";

const ClothesCreate = ({ onCreate }) => {
  const [clothingtype, setClothingType] = useState(null);
  const [color, setColor] = useState([]);
  const [season, setSeason] = useState([]);
  const [occasion, setOccasion] = useState([]);
  const [brand, setBrand] = useState(null);
  const [size, setSize] = useState(null);
  const [material, setMaterial] = useState([]);
  const [pattern, setPattern] = useState([]);
  const [imageSelected, setImageSelected] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); //stops page from refreshing
    let imageUrl = "";

    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "clothes_preset");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmjzidsiy/image/upload",
        formData
      );

      imageUrl = ImageBGRemoved({ image: response.data.secure_url });
    }

    const formatValue = (val) =>
      val ? (Array.isArray(val) ? val.map((v) => v.value) : val.value) : "";

    const newClothes = {
      clothingtype: formatValue(clothingtype),
      color: formatValue(color),
      season: formatValue(season),
      occasion: formatValue(occasion),
      brand: formatValue(brand),
      size: formatValue(size),
      material: formatValue(material),
      pattern: formatValue(pattern),
      image: imageUrl,
    };

    //passes value back
    await onCreate(newClothes);
    //Resets All the Values
    setClothingType(null);
    setColor([]);
    setSeason([]);
    setOccasion([]);
    setBrand(null);
    setSize(null);
    setMaterial([]);
    setPattern([]);
    setImageSelected(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="overflow-y-auto">
        <div className="grid grid-row-4 gap-2 font-handwriting">
          <div>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={(e) => setImageSelected(e.target.files[0])}
            ></input>
          </div>
          <div>
            <h1 className="text-xl">
              <strong>Item Type</strong>
            </h1>
            <Select
              className="basic-single pb-4 text-lg"
              classNamePrefix="select"
              name="Clothing Type"
              options={clothingtypeOptions}
              onChange={(value) => setClothingType(value)}
              value={clothingtype}
            />
            <h1 className="text-xl">
              <strong>Color</strong>
            </h1>
            <CreatableSelect
              isMulti
              name="Color"
              options={colorOptions}
              className="basic-multi-select pb-4 text-lg"
              classNamePrefix="select"
              onChange={(value) => setColor(value)}
              value={color}
            />
            <h1 className="text-xl">
              <strong>Season</strong>
            </h1>
            <CreatableSelect
              isMulti
              name="Season"
              options={seasonOptions}
              className="basic-multi-select pb-4 text-lg"
              classNamePrefix="select"
              onChange={(value) => setSeason(value)}
              value={season}
            />
            <h1 className="text-xl">
              <strong>Occasion</strong>
            </h1>
            <CreatableSelect
              isMulti
              name="Occasion"
              options={occasionOptions}
              className="basic-multi-select pb-4 text-lg"
              classNamePrefix="select"
              onChange={(value) => setOccasion(value)}
              value={occasion}
            />
          </div>
          <div>
            <h1 className="text-xl">
              <strong>Brand</strong>
            </h1>
            <Select
              className="basic-single pb-4 text-lg"
              classNamePrefix="select"
              name="Brand"
              options={brandOptions}
              onChange={(value) => setBrand(value)}
              value={brand}
            />
            <h1 className="text-xl">
              <strong>Size</strong>
            </h1>
            <Select
              className="basic-single pb-4 text-lg"
              classNamePrefix="select"
              name="Size"
              options={sizeOptions}
              onChange={(value) => setSize(value)}
              value={size}
            />
            <h1 className="text-xl">
              <strong>Material</strong>
            </h1>
            <CreatableSelect
              isMulti
              name="Material"
              options={materialOptions}
              className="basic-multi-select pb-4 text-lg"
              classNamePrefix="select"
              onChange={(value) => setMaterial(value)}
              value={material}
            />
            <h1 className="text-xl">
              <strong>Pattern</strong>
            </h1>
            <CreatableSelect
              isMulti
              name="Pattern"
              options={patternOptions}
              className="basic-multi-select pb-4 text-lg"
              classNamePrefix="select"
              onChange={(value) => setPattern(value)}
              value={pattern}
            />
          </div>
          <button
            type="submit"
            className="w-48 h-48 justify-self-center hover:scale-105 transition-transform"
          >
            <img src={CreateButton} alt="Upload Clothes Button" />
          </button>
        </div>
      </form>
    </>
  );
};

export default ClothesCreate;
