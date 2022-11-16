import React from "react";
import { BsWhatsapp, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="whatsapp://send?text=Hello World!&phone=+2348160831943">
        <BsWhatsapp />
      </a>
    </div>
    <div href="https://www.facebook.com/">
      <a href="https://www.linkedin.com/in/tijjani-abdullahi-a15b6b1a7">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/loopzzom/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
