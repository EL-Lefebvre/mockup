import React from "react";
import styled from "styled-components";
import Logo from "../assets/maket.png";
const Footer = () => {
  return (
    <Wrapper>
      <Text>Powered by</Text>
      <Image src={Logo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 1;
`;
const Text = styled.h4``;
const Image = styled.img`
  height: 40px;
  width: 40px;
  padding-left: 20px;
`;
export default Footer;
