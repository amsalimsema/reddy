import styled from "styled-components";
import { Link } from "react-router-dom";

// general link

export const GenLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
// uniform spacing on top of all components to allow clarity after scroll

export const Space = styled.div`
  height: 100px;
`;

// background attributes
export const Bg = styled.div`
  background-color: black;
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
`;

// show details
export const Skirt = styled.div`
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// show details title
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  color: #fff;
  @media only screen and (min-width: 768px) {
    padding-top: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 10rem;
  }
  @media only screen and (min-width: 2500px) {
    padding-top: 30rem;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`;
