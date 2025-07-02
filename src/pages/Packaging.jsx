import React from "react";
import Header from "../components/header";
import "../css/style.css";

// DogwoodBotanicals imports
import d1 from "../assets/DogwoodBotanicals/IMG_1930.jpg"
import d2 from "../assets/DogwoodBotanicals/IMG_1936.jpg"
import d3 from "../assets/DogwoodBotanicals/IMG_1998.jpg"
import d4 from "../assets/DogwoodBotanicals/Dogwood-2.jpg"
import d5 from "../assets/DogwoodBotanicals/Dogwood-4.jpg"
import d6 from "../assets/DogwoodBotanicals/Dogwood-22.jpg"
import d7 from "../assets/DogwoodBotanicals/Dogwood-40.jpg"
import d8 from "../assets/DogwoodBotanicals/Dogwood-45.jpg"
import d9 from "../assets/DogwoodBotanicals/IMG_5260.jpg"

// DogwoodBotanicals array
const dogwoodBotanicalsImages = [
  {
    url: d1,
    alt: "alt text",
    title: "title",
  },
  {
    url: d2,
    alt: "alt text",
    title: "title",
  },
  {
    url: d3,
    alt: "alt text",
    title: "title",
  },
  {
    url: d4,
    alt: "alt text",
    title: "title",
  },
  {
    url: d5,
    alt: "alt text",
    title: "title",
  },
  {
    url: d6,
    alt: "alt text",
    title: "title",
  },
  {
    url: d7,
    alt: "alt text",
    title: "title",
  },
  {
    url: d8,
    alt: "alt text",
    title: "title",
  },
  {
    url: d9,
    alt: "alt text",
    title: "title",
  },
]

function Packaging() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {dogwoodBotanicalsImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packaging;
