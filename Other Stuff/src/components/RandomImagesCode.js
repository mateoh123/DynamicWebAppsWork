import { useEffect, useState } from "react";

// Import all images from your assets folder
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

export default function RandomImageScatter() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;

      setVisibleImages((prev) => [
        ...prev,
        { src: randomImage, x: randomX, y: randomY },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {visibleImages.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className="absolute transition-transform duration-500"
          style={{
            top: `${img.y}%`,
            left: `${img.x}%`,
            width: "80px",
            height: "80px",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}
