import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import Wave from "../../assets/wave.png";
const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Name>
        <Image>
          {" "}
          <Icon src={Wave} />
        </Image>
        <Text>
          {" "}
          <h4> Jonathan Lamoureux </h4>
        </Text>
      </Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 10vh;
  background-color: ${COLORS.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  background-color: #fdf7ef;
  width: 10vw;
  display: flex;
  justify-content: center;
  margin-left: 40px;
  margin-top: 20px;
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.div``;
const Text = styled.div`
  color: white;
  padding-right: 20px;
  padding-left: 10px;
`;
const Icon = styled.img`
  height: 30px;
  width: 30px;
`;
export default Header;
