import React from "react";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <div>
            <span>MUSICVERSE</span>
            <h1>
              Feel the{" "}
              <span style={{ color: "darkred", display: "contents" }}>
                heart
              </span>{" "}
              beat
            </h1>
            <button className="button">EXPLORE</button>
          </div>
          <img
            className="home-img1"
            src="https://preview.colorlib.com/theme/djoz/img/about/xabout.png.pagespeed.ic.UQ_7DY9Axc.webp"
            alt="Img Not Found"
          />

          {/* <p>
            Weclome to the universe of music , all the best for your musical
            journey , which is about to begin
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Home;

// styled image -- https://preview.colorlib.com/theme/djoz/img/about/xabout.png.pagespeed.ic.UQ_7DY9Axc.webp
