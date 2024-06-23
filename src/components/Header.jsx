import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <img
        src='../../public/icons_assets/restauranfood.jpg'
        alt='little-lemon logo'
      />
      <Nav />
    </header>
  );
}
