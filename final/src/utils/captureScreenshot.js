import axios from "axios";
import html2canvas from "html2canvas";

// https://stackoverflow.com/questions/13152343/html2canvas-js-send-image-to-variable-for-server
// https://stackoverflow.com/questions/13152343/html2canvas-js-send-image-to-variable-for-server
// https://blog.logrocket.com/export-react-components-as-images-html2canvas/

const captureScreenshot = async (element, fileName, droppedItems = []) => {
  const canvas = await html2canvas(element, { scale: 2 });
  const blob = await new Promise((res) => canvas.toBlob(res));

  const formData = new FormData();
  formData.append("file", blob, `${fileName}.png`);
  formData.append("upload_preset", "outfits_preset");

  const { data: img } = await axios.post(
    "https://api.cloudinary.com/v1_1/dmjzidsiy/image/upload",
    formData
  );

  const { data: outfit } = await axios.post("http://localhost:3001/outfits", {
    name: `Outfit ${new Date().toLocaleString()}`,
    image: img.secure_url,
    items: droppedItems.map((i) => i.id),
    createdAt: new Date().toISOString(),
  });

  return { success: true, outfitId: outfit.id };
};

export default captureScreenshot;
