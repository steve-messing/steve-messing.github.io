import React from "react";
import Css from "../css/style.css";
import Name from "../components/name";

function Home() {
  return (
    <>
      <div className="container">
        <Name />
        <div className={Css.container}>
          <div class="blue box">
            <ul>
              <a class="link" href="https://github.com/steve-messing">
                <li>GitHub</li>
              </a>
              <a
                class="link"
                href="https://www.linkedin.com/in/steve-messing-a3b40264/"
              >
                <li>LinkedIn</li>
              </a>
            </ul>
          </div>

          <div class="red box">
            <h3>Trans Resources Page</h3>
            <button>
              <a href="https://realself.com/trans-resources">RealSelf</a>
            </button>
          </div>

          <div class="red box">
            <h3>Altarfy</h3>
            <button>
              <a
                className={Css.buttonLink}
                href="https://www.youtube.com/watch?v=FzYQIi99va0"
              >
                AR Altar Building App (iOS)
              </a>
            </button>
          </div>

          <div class="green box">
            <h3>Contact</h3>
            <button href="/">Coming Soon...</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
