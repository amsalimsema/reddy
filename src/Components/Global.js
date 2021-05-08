import styled from "styled-components";

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

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`;
