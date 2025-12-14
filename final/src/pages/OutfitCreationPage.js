import React, { useState, useRef } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { Droppable } from "../components/DropClothes";
import ClothesList from "../components/ClothesList.js";
import ClothesDrawer from "../components/ClothesDrawer.js";
import ClothingImageCard from "../components/ClothingImageCard.js";
import captureScreenshot from "../utils/captureScreenshot.js";
import openCloset from "../clothe_images/IconsandButtons/opneclosetbutton.png";
import saveIcon from "../clothe_images/IconsandButtons/SaveOutfitIcon.png";

// https://www.youtube.com/watch?v=ZALLXGVc_HU
// https://www.youtube.com/watch?v=HeNVPF_fRXI
// https://www.youtube.com/watch?v=Z8RoA_YSGDQ

const OutfitCreationPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [droppedItems, setDroppedItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const exportRef = useRef();

  function handleDragStart(event) {
    const clothingData = event.active.data.current;
    setActiveItem(clothingData);
  }

  function handleDragEnd(event) {
    console.log("Drag ended:", event);
    const { active, over } = event;

    if (over && over.id === "droppable") {
      const clothingData = active.data.current;
      console.log("Dropped item data:", clothingData);

      if (!droppedItems.find((item) => item.id === clothingData.id)) {
        setDroppedItems((prev) => [...prev, clothingData]);
      }
    }

    setActiveItem(null);
  }

  function handleDragCancel() {
    setActiveItem(null);
  }

  const handleCaptureAndSave = async () => {
    if (droppedItems.length === 0) {
      return;
    }

    setIsSaving(true);

    try {
      const result = await captureScreenshot(
        exportRef.current,
        "outfit",
        droppedItems
      );

      if (result.success) {
        alert("Outfit saved successfully!");
        console.log("Cloudinary URL:", result.cloudinaryUrl);
        console.log("Outfit ID:", result.outfitId);
      }
    } catch (error) {
      alert("Failed to save outfit. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-1 left-1/2 -translate-x-1/2  px-4 py-2  hover:scale-105 transition-transform"
      >
        <img src={openCloset} alt="Home" className="w-36 h-36 object-contain" />
      </button>

      <div className="grid grid-cols-4 w-full min-h-screen" ref={exportRef}>
        <div className="col-span-4 bg-zinc-400 p-4">
          <div className="flex gap-5">
            <div>
              <h1 className="text-5xl mb-4 font-handwriting">Outfit Board</h1>
            </div>
            <div>
              <button
                onClick={handleCaptureAndSave}
                disabled={isSaving || droppedItems.length === 0}
                className=" hover: transition-colors scale-105 transition-transform  disabled:cursor-not-allowed"
              >
                <img
                  src={saveIcon}
                  alt="Home"
                  className="w-10 h-10 object-contain"
                />
              </button>
            </div>
          </div>

          <Droppable id="droppable">
            <div className="p-8 border-2 border-dashed border-gray-600 rounded-lg bg-white/50 min-h-[300px]">
              {droppedItems.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {droppedItems.map((item) => (
                    <ClothingImageCard
                      key={item.id}
                      id={item.id}
                      clothingType={item.clothingtype}
                      image={item.image}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 text-lg text-center font-handwriting">
                  Drop clothes here to create your outfit
                </p>
              )}
            </div>
          </Droppable>
        </div>
      </div>

      <ClothesDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="text-black font-handwriting">
          <h3 className="text-lg font-semibold mb-4">Your Clothes</h3>
          <ClothesList
            clothingtypeID="tops"
            isDraggablePage={true}
            cardClick={false}
          />
        </div>
      </ClothesDrawer>

      <DragOverlay>
        {activeItem ? (
          <div className="opacity-90 cursor-grabbing">
            <ClothingImageCard
              id={activeItem.id}
              clothingType={activeItem.clothingtype}
              image={activeItem.image}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default OutfitCreationPage;
