const ModalImageGrid = ({ folder }) => {
  //my object function
  const projects = {
    twentytotenPhotos: require.context(
      "../work_assets/20To10Photos",
      false,
      /\.(png|jpe?g|webp|avif)$/
    ),
    votingiscoolPhotos: require.context(
      "../work_assets/VotingIsCoolPhotos",
      false,
      /\.(png|jpe?g|webp|avif)$/
    ),
    acrosstheamtrakPhotos: require.context(
      "../work_assets/AcrossTheAmtrackPhotos",
      false,
      /\.(png|jpe?g|webp|avif)$/
    ),
  };

  //using webpacks require.contect you can read through folders and sparse stuff out of them

  const allImages = (r) => r.keys().map(r); //r.keys is turning the images from projects into respective arrays, .map(r) imports the files for ready use within react
  const project = projects[folder];
  const images = allImages(project);

  const imageDivs = [];
  for (let i = 0; i < images.length; i++) {
    imageDivs.push(
      <div key={i} className="w-1/2  p-1 flex justify-center">
        <img src={images[i]} alt="lol" className="w-full object-cover" />
      </div>
    ); //im pushing the images into the div with specific styling and then retrning that div
  }
  return <div className="flex flex-wrap justify-center p-4">{imageDivs}</div>;
};

export default ModalImageGrid;
