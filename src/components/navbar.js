import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" width="100" height="100" className="m-1" />
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
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Collection
              </Link>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="/collection/cake">
                    Cakes
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/collection/chocobouquet">
                    Choco Bouquet
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/collection/aanadecoration">
                    Aana Decoration
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item ">
              <a
                href="https://www.instagram.com/out_of_box_crafts/"
                class="nav-link "
              >
                <i class="fab fa-instagram" style={{ fontSize: "2rem" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
