import React, { useEffect, useState } from "react";
import {
  LOGO,
  TWITTER,
  DISCORD,
  INSTAGRAM,
  OPEN_SEA,
  MEDIUM,
  TICTOK,
  LINKEDIN,
} from "../../constant/imageAndIcons";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./styles/index.scss";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    var navbar = document.getElementById("navbar");

    function myFunction() {
      if (window.pageYOffset === 0) {
        navbar.classList.remove("sticky");
      } else {
        navbar.classList.add("sticky");
      }
    }
    window.onscroll = function () {
      myFunction();
    };
  }, []);

  return (
    <header id="navbar">
      <div className="innernavbar">
        <div className="mobLogo">
          <a href="#home">
            <img src={LOGO} alt="logo" />
          </a>
        </div>

        <div className={`links_container ${navOpen && `mobile_nav`} `}>
          <div>
            <a href="#HeroSection">
              <img src={LOGO} alt="logo" />
            </a>
          </div>
          <div
            className="menu_container crossIcon_container"
            onClick={() => setNavOpen(!navOpen)}
          >
            <button className="btn">
              <XIcon />
            </button>
          </div>
          <div className="page_links">
            <a
              href="https://www.notion.so/xCollective-s-Whitepaper-9e81f39349c34c7087596e6114816ecb"
              rel="noreferrer"
              target="_blank"
            >
              <p>Whitepaper</p>
            </a>
            <a href="#mission">
              <p>Mission</p>
            </a>
            <a href="#roadmap">
              <p>Roadmap</p>
            </a>
            <a href="#team">
              <p>Team</p>
            </a>
            <a href="#jobs">
              <p>Job board</p>
            </a>
            <a
              href="https://xdao-merch-store.myshopify.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Merch</p>
            </a>
          </div>
          <div className="social_icons">
            <a
              href="https://twitter.com/xcollectiv"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={TWITTER} alt="TWITTER" />
              </button>
            </a>
            <a
              href="https://discord.com/invite/Xh2gbQpZD3"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={DISCORD} alt="DISCORD" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/joinxcollective/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={INSTAGRAM} alt="INSTAGRAM" />
              </button>
            </a>
            <a
              href="https://opensea.io/collection/xcollective-mint-pass"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={OPEN_SEA} alt="OPEN_SEA" />
              </button>
            </a>
            <a
              href="https://medium.com/@xcollective"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={MEDIUM} alt="MEDIUM" />
              </button>
            </a>
            <a
              href="https://www.tiktok.com/@joinxdao?is_from_webapp=1&sender_device=pc"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={TICTOK} alt="TICTOK" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/xcollective"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn">
                <img src={LINKEDIN} alt="LINKEDIN" />
              </button>
            </a>
          </div>
        </div>
        <div className="menu_container" onClick={() => setNavOpen(!navOpen)}>
          <button className="btn">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
