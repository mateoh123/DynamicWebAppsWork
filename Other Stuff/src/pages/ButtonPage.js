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
        <WorkCard
          image={require("../work_assets/icons/sea_foam_icon.webp")}
          title="WET"
          date="August - 10 -2024"
        />
        <WorkCard
          image={require("../work_assets/icons/early_morn_icon.webp")}
          title="Thinking Of Me"
          date="June - 26 -2024"
        />
        <WorkCard
          image={require("../work_assets/icons/sonicon_icon.webp")}
          title="Sonicon Ava"
          date="May - 14 -2024"
        />
        <WorkCard
          onClick={() => openModal("modal3")}
          image={require("../work_assets/icons/sonicon_icon.webp")}
          title="Sonicon Ava"
          date="May - 14 -2024"
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
        />
      </WorkModal>

      <WorkModal isOpen={openModalId === "modal2"} onClose={closeModal}>
        <h2>Modal 2 Content</h2>
        <p>This is the content for the second modal, it's different!</p>
      </WorkModal>

      <WorkModal isOpen={openModalId === "modal3"} onClose={closeModal}>
        <h2>Modal 3 Content</h2>
        <p>This is the content for the third modal, with more details.</p>
      </WorkModal>
    </>
  );
};

export default ButtonPage;
