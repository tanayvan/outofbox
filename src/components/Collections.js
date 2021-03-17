import React from "react";
import Card from "./Card";

import cake from "../assets/cake.svg";
import choco_bouquet from "../assets/chocobouquet.svg";
import bouquet from "../assets/bouquet.svg";

const collections = [
  {
    title: "Cakes",
    url: cake,
    to: "/collection/cake",
  },
  {
    title: "Choco Bouquet",
    url: choco_bouquet,
    to: "/collection/chocobouquet",
  },
  {
    title: "Aana Decoration",
    url: bouquet,
    to: "/collection/aanadecoration",
  },
];

export default function Collections() {
  return (
    <div className="m-5">
      <div className="display-5 mt-5 text-center color">Our Collections</div>
      <div className="container">
        <div className="row mt-5">
          {collections.map((collection) => {
            return (
              <div className="col-lg-4 mt-2">
                <Card
                  title={collection.title}
                  url={collection.url}
                  to={collection.to}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
