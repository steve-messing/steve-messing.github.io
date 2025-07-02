import React from "react";
import Header from "../components/header";
import "../css/style.css";

import p1 from "../assets/CrowdCow/22414421_10156739518509502_2054158314_n.jpg"
import p2 from "../assets/CrowdCow/22497421_10156739465439502_365303385_n.jpg"
import p3 from "../assets/CrowdCow/22497610_10156739468584502_1948134332_n.jpg"
import p4 from "../assets/CrowdCow/22497690_10156739469399502_1411677182_n.jpg"
import p5 from "../assets/CrowdCow/22500692_10156739470699502_1992294701_n.jpg"
import p6 from "../assets/CrowdCow/22532327_10156739526549502_849298221_o.jpg"
import p7 from "../assets/CrowdCow/22537905_10156739471159502_1739759498_n.jpg"
import p8 from "../assets/CrowdCow/22537973_10156739470034502_940963725_n.jpg"
import p9 from "../assets/CrowdCow/35519210574_7a217555a1_k.jpg"
import p10 from "../assets/CrowdCow/35519211504_b3dd6ef06c_k.jpg"
import p11 from "../assets/CrowdCow/35519215944_3122953a59_k.jpg"
import p12 from "../assets/CrowdCow/35546456673_1bb0cbc0fa_k.jpg"
import p13 from "../assets/CrowdCow/35546457583_d7dbaba12f_k.jpg"
import p14 from "../assets/CrowdCow/36310375866_30b9a0321f_o.jpg"
import p15 from "../assets/CrowdCow/36310378916_beda14c396_o.jpg"
import p16 from "../assets/CrowdCow/36310383106_0d66391518_k.jpg"
import p17 from "../assets/CrowdCow/36354730765_7038939881_k.jpg"
import p18 from "../assets/CrowdCow/chicken+pc-v5+final_Page_1.jpg"
import p19 from "../assets/CrowdCow/chicken+pc-v5+final_Page_2.jpg"
import p20 from "../assets/CrowdCow/IMG_6360.jpeg"
import p21 from "../assets/CrowdCow/no_condiments_necessary_v4_1024.png"
import p22 from "../assets/CrowdCow/Wagyu+Infographic-v4+WEB.jpg"
import p23 from "../assets/CrowdCow/wagyuPC.jpg"
import p24 from "../assets/CrowdCow/wagyuPC1.jpg"

const beefImages = [
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
  {
    url: p13,
    alt: "alt text",
    title: "title",
  },
  {
    url: p14,
    alt: "alt text",
    title: "title",
  },
  {
    url: p15,
    alt: "alt text",
    title: "title",
  },
  {
    url: p16,
    alt: "alt text",
    title: "title",
  },
  {
    url: p17,
    alt: "alt text",
    title: "title",
  },
  {
    url: p18,
    alt: "alt text",
    title: "title",
  },
  {
    url: p19,
    alt: "alt text",
    title: "title",
  },
  {
    url: p20,
    alt: "alt text",
    title: "title",
  },
  {
    url: p21,
    alt: "alt text",
    title: "title",
  },
  {
    url: p22,
    alt: "alt text",
    title: "title",
  },
  {
    url: p23,
    alt: "alt text",
    title: "title",
  },
  {
    url: p24,
    alt: "alt text",
    title: "title",
  },
]

function Beef() {
  return (
    <div className="container">
      <Header />
      <div className="gallery">
        {beefImages.map((image) => (
          <div className="imgContainer">
            <img src={image.url} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beef;
