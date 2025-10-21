import WorkCard from "../components/WorkCard";
import React, { useState } from "react";
import WorkModal from "../components/WorkModal";
import WorkModalContent from "../components/WorkModalContent";

const ButtonPage = () => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };
  return (
    <>
      <div className="flex flex-wrap justify-evenly m-4">
        <WorkCard
          onClick={() => openModal("modal1")}
          image={require("../work_assets/icons/20to10_icon.avif")}
          title="20 to 10"
          date="February - 22 - 2025"
        />
        <WorkCard
          onClick={() => openModal("modal2")}
          image={require("../work_assets/icons/Lamar_UpClose.webp")}
          title="V00TING 1S C001"
          date="November - 1 - 2024"
        />
        <WorkCard
          onClick={() => openModal("modal3")}
          image={require("../work_assets/icons/Untitled-1.webp")}
          title="Across The Amtrak"
          date="August - 24 - 2024"
        />
      </div>
      <WorkModal
        workTitle="20 To 10"
        isOpen={openModalId === "modal1"}
        onClose={closeModal}
      >
        <WorkModalContent
          tagline="I know less at 20, than I did at 10"
          description="What does it mean when you turn 20? Are you supposed to know everything? Are you still supposed to be confused about everything around you? Inspired by grid collages and my personal feelings of being confused about everything at 20; I made a collage of those feelings. Putting together things I've held dear to myself; music, my headphones, floral patterns. It's an all-encompassing collage of not only me at 20 but aspects of me at all stages of my life."
          imageGrid="twentytotenPhotos"
        />
      </WorkModal>

      <WorkModal
        workTitle="V00TING 1S C001"
        isOpen={openModalId === "modal2"}
        onClose={closeModal}
      >
        <WorkModalContent
          tagline="Make Voting Cool Again...
"
          description="This project began as a conversation with a friend about how to make voting more appealing to younger audiences. Inspired by the clean, elegant aesthetic of clothing campaigns from brands like ZARA and H&M, the initial concept was to create a minimalist and sophisticated series urging people to vote. However, the idea evolved into a whimsical and playful approach, designed to resonate with a broader audience. By focusing on fun and lighthearted visuals, the photos use selective coloring to highlight the I Voted stickers. This intentional design choice draws the audience’s attention to the sticker, subtly encouraging civic engagement while keeping the tone approachable and memorable."
          imageGrid="votingiscoolPhotos"
        />
      </WorkModal>

      <WorkModal
        workTitle="Across The Amtrak"
        isOpen={openModalId === "modal3"}
        onClose={closeModal}
      >
        <WorkModalContent
          tagline="When Im Back In Chicago..."
          description="On my journey back to New York City for the new school year, I traveled cross-country on Amtrak, capturing moments along the way. This experience allowed me to explore new places like New Mexico and revisit new favorites like Chicago, that now hold bittersweet memories, of love I want to rekindle in the future and pain I hope to never feel again. Through these photos, I commemorated a unique adventure that blended discovery and nostalgia, documenting the beauty of the landscapes and cities that shaped my trip."
          imageGrid="acrosstheamtrakPhotos"
        />
      </WorkModal>
    </>
  );
};

export default ButtonPage;
