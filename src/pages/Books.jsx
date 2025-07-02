import React from "react";
import Header from "../components/header";
import "../css/style.css";

import p1 from "../assets/BartlebySage/BS1.jpeg"
import p2 from "../assets/BartlebySage/BS2.jpeg"
import p3 from "../assets/BartlebySage/BS3.jpeg"
import p4 from "../assets/BartlebySage/BS4.jpeg"
import p5 from "../assets/BartlebySage/cocktailmenu.jpg"

const booksImages = [
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
];

function Books() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {booksImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
