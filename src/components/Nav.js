import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix Logo"
        src="/img/logo.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img alt="User logged" src="/img/userLogo.png" className="nav__avater" />
    </nav>
  );
}

export default Nav;
