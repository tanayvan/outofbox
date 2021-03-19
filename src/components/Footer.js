import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#ffe3df" }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6 m-1 col-12 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" width="150" height="150" />

            <a
              className="color footer-link"
              href="https://www.instagram.com/out_of_box_crafts/"
            >
              <i class="fab fa-instagram" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              className="color footer-link"
              href="mailto:rinkalkothari108@gmail.com"
            >
              <i class="fas fa-envelope" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </div>
      <div className="color mx-2 p-1">
        Made with
        <span className="mx-1">
          <i class="fas fa-heart"></i>
        </span>
        by Tanay Van
      </div>
    </div>
  );
}
