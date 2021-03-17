import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" width="100" height="100" className="m-2" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/collections">
                Our Collection
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
