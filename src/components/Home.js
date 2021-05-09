import React from "react";
import styled from "styled-components";
import Logo from "../assets/landing.webp";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/needs");
  };
  return <Wrapper onClick={handleClick}></Wrapper>;
};
const Wrapper = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 5;
  transition: all 2s;
`;
export default Home;
