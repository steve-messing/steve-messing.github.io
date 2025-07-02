import React from "react";
import "../css/style.css";
import { fineArtImages } from "../pages/pageData";

function Gallery(images) {
  return (
      <div className="gallery">
        <img src={require(fineArtImages[0])} alt="sdfdsf"></img>
        hello
        {images.map((image) => (
          <div className="imgContainer">
            <img src={require(image.url)} alt="testing"></img>
          </div>
        ))}
      </div>
  );
}

export default Gallery;
