import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix Logo"
        src="/img/logo.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <img alt="User logged" src="/img/userLogo.png" className="nav_avater" />
    </nav>
  );
}

export default Nav;
