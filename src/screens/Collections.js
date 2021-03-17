import React from "react";
import Base from "../components/Base";
import ImageGallery from "react-image-gallery";
import cake from "../data/cake";
import bouquet from "../data/bouquet";
import aanadecoration from "../data/aana";

export default function Collections({ type }) {
  if (type === "cake") {
    return (
      <Base>
        <ImageGallery items={cake} />
      </Base>
    );
  }
  if (type === "chocobouquet") {
    return (
      <Base>
        <ImageGallery items={bouquet} />
      </Base>
    );
  }
  if (type === "aanadecoration") {
    return (
      <Base>
        <ImageGallery items={aanadecoration} />
      </Base>
    );
  }
  if (type === "all") {
    return (
      <Base>
        <ImageGallery items={[...aanadecoration, ...cake, ...bouquet]} />
      </Base>
    );
  }
}
