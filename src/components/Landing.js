import "./Landing.scss";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import logo from "../generations-logo-trans.png";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="landing-header">
        <div className="logo-continer">
          <a href="https://generations-adventureplex.com/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="social-continer">
          <a
            className="icon-container"
            href="https://www.facebook.com/GenerationsAdventurePlex"
          >
            <BsFacebook color="white" />
          </a>
          <a
            className="icon-container"
            href="https://twitter.com/gadventureplex"
          >
            <BsTwitter color="white" />
          </a>
          <a
            className="icon-container"
            href="https://www.instagram.com/generations_adventureplex/"
          >
            <BsInstagram color="white" />
          </a>
        </div>
      </div>
      <div className="landing-body">
        <div className="heading-container">
          <div className="heading">Join a winning team</div>
          <a href="https://generations-adventureplex.com/jobs/">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
