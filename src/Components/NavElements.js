import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Global";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const NavbarContainer = styled(Container)`
  display: flex;

  justify-content: space-between;
  // height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  margin-left: -1rem;
  z-index: 50;
  color: #fff;
  &:hover {
    color: cyan;
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 99;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  //   align-items: center;
  list-style: none;
  //   text-align: center;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-top: 8rem;
    padding-left: 1.5rem;
    width: 100%;
    height: 100vh;
    position: absolute;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.3s ease;
    background-color: black;
    margin-top: 1.1rem;
    // margin-top: -0.1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    padding-top: 4.5rem;
    padding-left: 2rem;
    width: 50%;
    height: 100vh;
    position: absolute;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: black;
    // margin-top: -0.1rem;
    margin-top: 2rem;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 3rem;
  }
`;

export const NavItem = styled.li`
  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`;

export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  @media screen and (min-width: 1025px) {
    text-align: center;
    // padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: cyan;
      text-decoration: none;
    }
  }
`;
