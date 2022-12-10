import React from "react";
import image from "../image/Nilesh.png";
export default function Info() {
  return (
    <div className="info-section">
      <img src={image} alt="nileshphoto" className="nilesh-photo" />
      <h1 className="name">Nilesh Kokare</h1>
      <h3 className="skill">Frontend Developer</h3>
      <p className="email">nile10kokare@gmail.com</p>
      <div className="buttons">
        <a href="mailto:nile10kokare@gmail.com" className="email-link">
          <button className="email-btn">
            <ion-icon name="mail-outline"></ion-icon>Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/nilesh-kokare-92461b231/"
          className="linkedin-link"
        >
          <button className="linkedin-btn">
            <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
