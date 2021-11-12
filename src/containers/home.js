import React from "react";
import styled from "styled-components/macro";

const HomeContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled.div`
  // height: 100vh;
`;

export default HomeContainer;
