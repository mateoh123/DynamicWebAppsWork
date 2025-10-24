const ModalImageGrid = ({ folder }) => {
  const contexts = {
    project1: require.context(
      "../work_assets/20To10Photos",
      false,
      /\.(png|jpe?g|svg|webp|avif)$/
    ),
    project2: require.context(
      "../work_assets/VotingIsCoolPhotos",
      false,
      /\.(png|jpe?g|svg|webp|avif)$/
    ),
  };

  const importAll = (r) => r.keys().map(r);
  const context = contexts[folder];
  const images = importAll(context);

  const imageDivs = [];
  for (let i = 0; i < images.length; i++) {
    imageDivs.push(
      <div key={i} className="w-1/2  p-1 flex justify-center">
        <img src={images[i]} alt="lol" className="w-full object-cover" />
      </div>
    );
  }

  return <div className="flex flex-wrap justify-center p-4">{imageDivs}</div>;
};

export default ModalImageGrid;
