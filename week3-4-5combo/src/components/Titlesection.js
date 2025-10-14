const TitleSection = (props) => {
  const { image, title, description } = props;
  return (
    <div className="flex justify-center items-center gap-8">
      <img src={image} alt={title} className="h-96 w-96 object-cover" />
      <div>
        <h1 className="text-[10rem] leading-none font-bold">{title}</h1>
        <p className="text-[2rem] bg-gray-200 px-5 py-2 inline-block mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
