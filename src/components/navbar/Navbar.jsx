import React, { useState } from "react";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/Gabriel Ferreira-logos_transparent-100.png";
import "./navbar.css";

// BEM Block Element
const Menu = () => (
  <>
    <p>
      {" "}
      <a href="#home">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#wgpt3">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#possibility">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#features">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#blog">Home</a>{" "}
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            {" "}
            <a href="#home">Home</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#wgpt3">What is GPT3</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#possibility">Open AI</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#features">Case Studies</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#blog">Library</a>{" "}
          </p>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <>
              <div className="gpt__navbar-menu_container scale-up-center"></div>
              <div className="gpt3__navbar-menu_container-links"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
