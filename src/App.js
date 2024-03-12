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
              <ul class="code-projects">
                <a href="/">
                  <li >Coming Soon...</ li>
                </a>
              </ul>
            </div>
            <div class="red box">
              <h3>
                <a href="https://github.com/steve-messing?tab=repositories">
                  Altarfy
                </a>
              </h3>
              <ul class="code-projects">
                <a href="https://www.youtube.com/watch?v=FzYQIi99va0">
                  <li>AR Altar Building App (iOS)</li>
                </a>
              </ul>
            </div>
            <div class="red box">
              <h3>
                <a href="https://github.com/steve-messing?tab=repositories">
                  Trans Resources Page
                </a>
              </h3>
              <ul class="code-projects">
                <a href="https://realself.com/trans-resources">
                  <li>RealSelf</li>
                </a>
              </ul>
            </div>

        </div>
      </div>
    </>
  );
}

export default App;
