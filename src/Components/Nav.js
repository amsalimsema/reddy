import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
//import logo from "../Images/logo.png";
import "../App.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Drawer,
  Links,
} from "./NavElements";
//import { Call, Envelope, Map } from "./Contact";

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
                <h4>REDDY'S LOGO</h4>
                {/* <img src={logo} alt="logo" style={{ width: "100px" }} /> */}
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <Links
                    to="/legal"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    LEGAL
                  </Links>
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
                <NavItem>
                  <NavLinks
                    href="/#team"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: "none" }}
                  >
                    TEAM
                  </NavLinks>
                </NavItem>

                <Drawer>
                  {/* <p className="pt-1">
                    <Call />
                    &nbsp; &nbsp;
                    <span>Studio Lines:</span>
                    <br />
                    <a
                      href="tel: 0776910350"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      0776910350
                    </a>
                    &nbsp;/ &nbsp;
                    <a
                      href="tel:  0794559220"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      0794559220
                    </a>
                  </p>
                  <p>
                    <Envelope />
                    &nbsp; &nbsp;
                    <span>Email:</span>
                    <br />
                    <a
                      href="mailto:tembofm103.5@gmail.com 
                  "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      tembofm103.5@gmail.com
                    </a>
                  </p>
                  <p>
                    <Map />
                    &nbsp; &nbsp;
                    <span>Address:</span>
                    <br /> P-Star building at Hilltop Plot 25, Ogwok Road.
                  </p> */}
                </Drawer>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  );
}
