import React from "react";
import instagramIcon from "../work_assets/navigationIcons/icons8-instagram-64.png";
import emailIcon from "../work_assets/navigationIcons/icons8-email-64.png";
import linkedinIcon from "../work_assets/navigationIcons/icons8-linkedin-64.png";

const Footer = () => {
  return (
    <div className="py-4 px-4 justify-items-center font-bold font-source_san_3 text-lg">
      <h3>Socials</h3>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/_.tomateo._/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            width="64"
            height="64"
            alt="logo-instagram"
            className="hover:scale-125"
          />
        </a>
        <a href="mailto:mateoche76@gmail.com" target="_blank" rel="noreferrer">
          <img
            src={emailIcon}
            width="64"
            height="64"
            alt="logo-email"
            className="hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mateo-hernandez21/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            width="64"
            height="64"
            alt="logo-linkedin"
            className="hover:scale-125"
          />
        </a>
      </div>
      <h3>© 2025 Mateo Hernandez. All Rights Reserved.</h3>
    </div>
  );
};

export default Footer;
