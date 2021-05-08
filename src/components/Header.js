import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
const Header = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  height: 10vh;
  background-color: ${COLORS.primary};
  width: 100vw;
`;
export default Header;
