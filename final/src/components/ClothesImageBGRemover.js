import { Cloudinary } from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";

const ImageBGRemoved = ({ image }) => {
  const cloud = new Cloudinary({
    cloud: { cloudName: "dmjzidsiy" }, 
  });

  if (!image) return null; 

  const newId = image.replace(/^.*\/upload\//, ""); 

  return cloud.image(newId).effect(backgroundRemoval()).toURL(); 
};

export default ImageBGRemoved;
