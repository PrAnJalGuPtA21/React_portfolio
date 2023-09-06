import React, { useContext } from "react";
import "./Intro.css";

import boy from "../../img/boy.jpg";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";

import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi !! I Am</span>
          <span>Pranjal Gupta</span>
          <span>
            Hello, I'm Pranjal, a passionate and ambitious software developer with a fresh perspective and a hunger for innovation. I am thrilled to embark on this exciting journey in the world of technology, where I constantly seek to expand my skills and make a meaningful impact through code.
            My journey into the world of software development began with a fascination for problem-solving.
            What truly excites me about software development is its potential to create solutions that improve lives and simplify complex processes. 
            I've honed my skills in a variety of programming languages and technologies, including <span style={{fontSize : "1rem"}}>C++ , React.js , Bootstrap  , Javascript ,C , Node.js , Express.js , Wordpress, MongoDB.</span>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/PrAnJalGuPtA21"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/pranjal-gupta-8b1264229/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/_pranjal._.gupta_/"><img src={Instagram} alt="" /></a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" className="block" />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
