import "./css/style.css";
import Nav from "./nav";
import Logo from "./logo";
import React from "react";
import Footer from "./footer";

function App() {
  return (
    <>
      <body>
        <Logo />
        <h1 class="name">STEVE GERMAIN MESSING</h1>

        <Nav />

        <div class="content">
          <h2>Work</h2>
          <div className="displayFlex">
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
          </div>
          <div className="displayFlex">
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
        </div>
        <Footer />
      </body>
    </>
  );
}

export default App;
