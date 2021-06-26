import React from "react";
import styled from "styled-components";

const Blank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Content = styled.div`
  margin: 0 2.5rem 0 2.5rem;
`;
export default function Web() {
  return (
    <Blank>
      <Content className="text-center">
        <h2>
          If you're seeing this page.
          <br />
          Please Contact your webmaster/developer
        </h2>
      </Content>
    </Blank>
  );
}
