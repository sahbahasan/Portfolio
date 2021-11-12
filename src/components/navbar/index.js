import React from "react";
import { Container } from "./styles/navbar";

const Navbar = () => {
  return <div></div>;
};

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

export default Navbar;
