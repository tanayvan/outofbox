import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/insta.png";
import mail from "../assets/mail.png";
import heart from "../assets/heart.png";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#ffe3df" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 m-5 col-12 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" width="150" height="150" />
            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <a
                className="color footer-link"
                href="https://www.instagram.com/out_of_box_crafts/"
              >
                <img src={insta} alt="" width="30" height="30" />
                <span> out_of_box_crafts</span>
              </a>
              <a
                className="color footer-link"
                href="mailto:rinkalkothari108@gmail.com"
              >
                <img src={mail} alt="" width="30" height="30" />
                <span>rinkalkothari108@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="color mx-2 p-1">
        Made with
        <span className="mx-1">
          <img src={heart} alt="" height="30" />
        </span>
        by Tanay Van
      </div>
    </div>
  );
}
