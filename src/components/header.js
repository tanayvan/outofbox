import React from "react";
import { Link } from "react-router-dom";
import cake from "../assets/birthdaycake.svg";

export default function Header() {
  return (
    <div className="mt-1">
      <div className="container">
        <div className="row" style={{ height: "75vh" }}>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-center ">
              <div className="display-1 color"> Make Your Day Special </div>
              <div className="mt-5">
                <a href="#contact-us">
                  <button type="button" class="btn btn-outline-dark mx-2 color">
                    Contact Us
                  </button>
                </a>
                <Link to="/collections">
                  <button type="button" class="btn btn-outline-dark mx-2 color">
                    See Our Collections
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mx-3 px-3 my-1">
              <img
                src={cake}
                alt=""
                style={{ width: "100%", height: "100%", textAlign: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
