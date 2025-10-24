import ModalImageGrid from "./ModalImageGrid";

const WorkModalContent = ({ tagline, description }) => {
  return (
    <>
      <ModalImageGrid folder="project1" />
      <div className="flex flex-wrap pl-4 pr-4">
        <h3 className="font-bold text-4xl pb-1">{tagline}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default WorkModalContent;
