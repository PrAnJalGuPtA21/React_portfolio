import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { UilLinkedin } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>PG Development@ 2024</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_pranjal._.gupta_/">
          <Insta color="white" size={"2rem"} />
          </a>
          <a href="https://github.com/PrAnJalGuPtA21">
          <Gitub color="white" size={"2rem"} />
          </a>
          <a href="https://www.linkedin.com/in/pranjal-gupta-8b1264229/">
          <UilLinkedin color="white" size={"2rem"}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
