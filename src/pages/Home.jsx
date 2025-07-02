import React from "react";
import "../css/style.css";
import Header from "../components/header";
import BartlebySage from "../assets/BartlebySage/BS1.jpeg";
import Sharece from "../assets/ShareceJeweler/IMG_9545.jpg";
import CrowdCow from "../assets/CrowdCow/wagyuPC.jpg";
import GoodFortune from "../assets/GoodFortune/45871544_10157961116859502_7230725619187712000_n.jpg";
import Dogwood from "../assets/DogwoodBotanicals/Dogwood-45.jpg";
import FineArt from "../assets/FineArt/The+Jungle.jpg";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="gallery">
          <div className="imgContainer">
            <a href="/fine-art">
              <img
                className="vert"
                src={FineArt}
                alt="steve messing woodblock print"
              ></img>
              <div class="overlay">FINE ART</div>
            </a>
          </div>
          <div className="imgContainer">
            <a href="/packaging">
              <img
                className="vert"
                src={Dogwood}
                alt="dogwood botanicals"
              ></img>
              <div class="overlay">PACKAGING</div>
            </a>
          </div>
          <div className="imgContainer">
            <a href="/beef">
              <img
                className="vert"
                src={CrowdCow}
                alt="crowd cow wagyu postcard"
              ></img>
              <div class="overlay">BEEF</div>
            </a>
          </div>
          <div className="imgContainer">
            <a href="/concept-art">
              <img src={GoodFortune} alt="good fortune magazine"></img>
              <div class="overlay">CONCEPT ART</div>
            </a>
          </div>
          <div className="imgContainer">
            <a href="/branding">
              <img
                src={Sharece}
                alt="sharece phillips jeweler business card"
              ></img>
              <div class="overlay">BRANDING</div>
            </a>
          </div>
          <div className="imgContainer">
            <a href="/books">
              <img src={BartlebySage} alt="bartlebySageLookbook"></img>
              <div class="overlay">BOOKS</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
