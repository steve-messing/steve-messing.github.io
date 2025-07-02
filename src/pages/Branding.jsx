import React from "react";
import Header from "../components/header";
import "../css/style.css";

// ShareceJeweler imports
// import s1 from "../assets/ShareceJeweler/Artboard+1.png"
import s2 from "../assets/ShareceJeweler/IMG_9545.jpg"
import s3 from "../assets/ShareceJeweler/Screen+Shot+2018-10-10+at+5.05.12+PM.png"

// ShareceJeweler array
const shareceJewelerImages = [
  {
    url: s2,
    alt: "alt text",
    title: "title",
  },
  {
    url: s3,
    alt: "alt text",
    title: "title",
  },
]

function Branding() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {shareceJewelerImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branding;
