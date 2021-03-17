import React from "react";
import Base from "../components/Base";
import Collections from "../components/Collections";
import Contactus from "../components/Contactus";
import Header from "../components/header";

export default function Homepage() {
  return (
    <Base>
      <Header />
      <Collections />
      <Contactus />
    </Base>
  );
}
