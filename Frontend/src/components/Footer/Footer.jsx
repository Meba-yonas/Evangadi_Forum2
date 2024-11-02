import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "../../assets/logo2.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import { PiFacebookLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";// Social icons
 // Assuming you're using CSS modules

const openExternalLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Logo and Social Media Icons */}
        <div className={styles.logoAndSocials}>
          <img src={logo} alt="Evangadi logo" className={styles.footerLogo} />
          <div className={styles.socialIcons}>
            <Link
              onClick={() =>
                openExternalLink("https://www.facebook.com/evangaditech/")
              }
            >
              <PiFacebookLogoLight />
            </Link>
            <Link
              onClick={() =>
                openExternalLink("https://www.instagram.com/evangaditech/")
              }
            >
              <IoLogoInstagram />
            </Link>
            <Link
              onClick={() =>
                openExternalLink("https://www.youtube.com/evangaditech")
              }
            >
              <AiOutlineYoutube />
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div className={styles.usefulLinks}>
          <h4>Useful Link</h4>
          <ul>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h4>Contact Info</h4>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
