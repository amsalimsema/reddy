import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../Images/reddy.jpg";
import "../App.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";

export default function NavTop() {
  // open and close drawer
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // change bg
  const [MobileNav, setMobileNav] = useState(false);
  const changebackground = () => {
    if (window.scrollY >= 50) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <>
      <div className={MobileNav ? "MobileNav active" : "MobileNav"}>
        <IconContext.Provider value={{ color: "cyan" }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                {/* <h3>REDDY'S&reg;</h3> */}
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "46.5px", height: "67.5px" }}
                />
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks
                    href="/#home"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    HOME
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#about"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    ABOUT US
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#services"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    SERVICES
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#projects"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    PROJECTS
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/#contact"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    CONTACT US
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  );
}
