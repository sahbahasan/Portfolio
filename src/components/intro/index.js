import React from "react";
import { Container, TextContainer, NavContainer } from "./styles/intro";

const Intro = () => {
  return <div></div>;
};

Intro.Container = function IntroContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Intro.TextContainer = function IntroTextContainer({ children, ...restProps }) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Intro.NavContainer = function IntroNavContainer({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>;
};

export default Intro;
