import React from "react";
// import Hamburger from "./components/hamburger";
// import Nav from "./components/nav";
// import Logo from "./components/logo";
import Name from "./components/name";
import Css from "../src/css/style.css";
import Pdf from "./components/pdf";
import resume from "./assets/resume.pdf";
import cv from "./assets/cv.pdf";

function App() {
  return (
    <>
      <div className="container">
        <Name />
        <div className={Css.container}>
          <div class="blue box">
            <ul>
              <a href="https://github.com/steve-messing">
                <li>GitHub</li>
              </a>
              <a href="https://github.com/steve-messing">
                <li>LinkedIn</li>
              </a>
              <a href="https://github.com/steve-messing">
                <li>Instagram</li>
              </a>
            </ul>
          </div>
          
          <div class="red box">
            <h3>
                Trans Resources Page
            </h3>
            <button href="https://realself.com/trans-resources">
                RealSelf
            </button>
          </div>
          
          <div class="red box">
            <h3>
                Altarfy
            </h3>
            <button href="https://www.youtube.com/watch?v=FzYQIi99va0">
                AR Altar Building App (iOS)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
