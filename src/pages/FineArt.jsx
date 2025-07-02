import React from "react";
import Header from "../components/header";
import "../css/style.css";

import p1 from "../assets/FineArt/Bars.png"
import p2 from "../assets/FineArt/DC025.jpg";
import p3 from "../assets/FineArt/DC031.jpg";
import p4 from "../assets/FineArt/IMG_3558.jpeg";
import p5 from "../assets/FineArt/IMG_4086+copy.jpg";
import p6 from "../assets/FineArt/LUST.png";
import p7 from "../assets/FineArt/Seated+Figure-cropped.png";
import p8 from "../assets/FineArt/Song+for+my+Father.jpg";
import p9 from "../assets/FineArt/TEMPUS.jpg";
import p10 from "../assets/FineArt/The+Jungle.jpg";
import p11 from "../assets/FineArt/Undying+Love.png";
import p12 from "../assets/FineArt/Vex.png";

const fineArtImages = [
  {
    url: p1,
    alt: "alt text",
    title: "title",
  },
  {
    url: p2,
    alt: "alt text",
    title: "title",
  },
  {
    url: p3,
    alt: "alt text",
    title: "title",
  },
  {
    url: p4,
    alt: "alt text",
    title: "title",
  },
  {
    url: p5,
    alt: "alt text",
    title: "title",
  },
  {
    url: p6,
    alt: "alt text",
    title: "title",
  },
  {
    url: p7,
    alt: "alt text",
    title: "title",
  },
  {
    url: p8,
    alt: "alt text",
    title: "title",
  },
  {
    url: p9,
    alt: "alt text",
    title: "title",
  },
  {
    url: p10,
    alt: "alt text",
    title: "title",
  },
  {
    url: p11,
    alt: "alt text",
    title: "title",
  },
  {
    url: p12,
    alt: "alt text",
    title: "title",
  },
];

function FineArt() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {fineArtImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FineArt;
