import React from "react";
import styled from "styled-components";
import HouseLogo from "../assets/house.svg";
import { COLORS } from "../constants";
const Main = ({ title, imageSrc, children }) => {
  return (
    <Wrapper>
      <Header>
        <Title>
          <TextDiv>
            <Text>{title} </Text>{" "}
          </TextDiv>
          <Image>{imageSrc}</Image>
        </Title>

        <Button>
          {" "}
          <img src={HouseLogo} width="20" />
          My project
        </Button>
      </Header>
      <MainArea>{children}</MainArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  border-bottom: 15px solid ${COLORS.primary};

  width: 120px;
  display: flex;
  align-items: center;
`;
const MainArea = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const TextDiv = styled.div``;
const Text = styled.h2`
  color: ${COLORS.primary};
  font-weight: bolder;
  width: 150px;
`;
const Image = styled.div`
  padding-left: 5px;
`;

export default Main;
