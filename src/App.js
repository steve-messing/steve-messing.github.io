import React from "react";
import Nav from "./components/nav";
import Logo from "./components/logo";
import Name from "./components/name";
import Css from "../src/css/style.css";
import Hamburger from "./components/hamburger";

function App() {
  return (
    <>
      <body>
        <Hamburger />
        <Name />
        <Nav />
        <div className={Css.container}>
            <div class="blue box">
              <ul class="code-projects">
                <a href="./assets/resume.pdf">
                  <li>Resume</li>
                </a>
              </ul>
            </div>
            <div class="blue box">
              <ul class="code-projects">
                <a href="./assets/cv.pdf">
                  <li>Curriculum Vitae</li>
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
                  <li>AR Altar Building iOS App</li>
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
      </body>
    </>
  );
}

export default App;
