import {
  DISCORD,
  INSTAGRAM,
  MAIL,
  MEDIUM,
  LINKEDIN,
  TICTOK,
  LOGO,
  OPEN_SEA,
  TWITTER,
} from "../../constant/imageAndIcons";
import "./styles/index.scss";
const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_wrapper">
        <div className="footer_links">
          <div className="inner_footer_links">
            <img src={LOGO} alt="logo" />
            <p>
            xCollective is a welcoming space where you can <br />
            find job opportunities, access pay data, receive mentorship and <br />
            career coaching, tips on resume crafting and negotiation strategy.
            </p>
         
          </div>

          <div>
            <p className="heading">Contact</p>
            <p className="textWithIcons">
              <img src={MAIL} alt="PHONE" />{" "}
              <a href="mailto:team@joinxcollective.xyz">team@joinxcollective.xyz</a>
            </p>
          </div>
          <div>
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
        </div>
        <div className="footer_hr" />
        <p className="footer_copyright">
          Copyright © 2022 xCollective. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
