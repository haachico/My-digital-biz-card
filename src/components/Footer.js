import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-section">
      <ul className="icon-list">
        <li>
          <a href="https://www.instagram.com/haachico/">
            <FaInstagram className="icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/haachico1">
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/haachico">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/nilesh.kokare.7/">
            <FaFacebook className="icon" />
          </a>
        </li>
      </ul>
    </div>

    // <div className="footer-section">
    //   <ul className="icon-list">
    //     <li>
    //       <a href="#">
    //         <ion-icon className="icon" name="logo-twitter"></ion-icon>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#">
    //         <ion-icon className="icon" name="logo-instagram"></ion-icon>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#">
    //         <ion-icon className="icon" name="logo-github"></ion-icon>
    //       </a>
    //     </li>
    //     <li>
    //         <a href="#">
    //           <ion-icon className="icon" name="logo-facebook"></ion-icon>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // );
  );
}
