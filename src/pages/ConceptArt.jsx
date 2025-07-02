import React from "react";
import Header from "../components/header";
import "../css/style.css";

// GoodFortune imports
import g1 from "../assets/GoodFortune/45871544_10157961116859502_7230725619187712000_n.jpg"
import g2 from "../assets/GoodFortune/45882096_10157960841184502_7778702169858899968_n.jpg"

// GoodFortune array
const goodFortuneImages = [
  {
    url: g1,
    alt: "alt text",
    title: "title",
  },
  {
    url: g2,
    alt: "alt text",
    title: "title",
  },
]

function ConceptArt() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {goodFortuneImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConceptArt;
