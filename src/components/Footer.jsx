import React from "react";

export default function Footer() {
  return (
    <footer>
      <img src='../../public/icons_assets/Logo.svg' alt='footer-logo' />

      <div>
        <p>Doormat Navigation</p>
        <nav>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Menu</a>
            </li>
            <li>
              <a href=''>Reservation</a>
            </li>
            <li>
              <a href=''>Order Online</a>
            </li>
            <li>
              <a href=''>Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          <li>
            <a href=''>Address</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>Phone</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
