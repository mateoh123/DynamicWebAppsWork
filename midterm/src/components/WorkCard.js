const WorkCard = ({ title, image, date, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" cursor-pointer w-80 overflow-hidden border-solid border-4 m-15 p-2 flex flex-col gap-2 border-stone-950 mb-4"
    >
      <div className="">
        <img
          src={image}
          alt={title}
          className="h-auto grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h3 className="text-3xl font-bold font-source_san_3 scale-x-55">
          {title}
        </h3>
        <p className="text-xl italic font-source_san_3">{date}</p>
      </div>
    </div>
  );
};

export default WorkCard;
