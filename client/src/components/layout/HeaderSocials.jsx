import React from "react";
import Resume from "../../assets/files/Tanner Bacon Resume.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/tannerbacon"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/tbacon20" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href={Resume} download>
        <HiDocumentDownload />
      </a>
    </div>
  );
};

export default HeaderSocials;
