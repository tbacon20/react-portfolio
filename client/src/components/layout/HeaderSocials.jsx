import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      <a href="tannerbacon20@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
