import style from "./Home.css";
import videoFile from "../../images/boxing.mp4";

import Navbar from "./Navbar/Navbar.js";
import Overlay from "../GlobalComponents/Overlay";
// import Overlay from "../GlobalComponents/Overlay";

const Home = () => {
  return (
    <section className="hero" style={style}>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>

      <Navbar />
      <Overlay />

      <div className="content">
        <h2>BUILD UP YOUR</h2>
        <br />

        <h1>BODY SHAPE</h1>
        <br />
        <h4>PUSH THROUGH THE PAIN EVERY SINGLE DAY.</h4>
      </div>
    </section>
  );
};

export default Home;
