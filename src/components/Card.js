import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ url, title, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={url} alt="" style={{ height: "15rem" }} />
        <h1 className="color">{title}</h1>
      </div>
    </Link>
  );
}
