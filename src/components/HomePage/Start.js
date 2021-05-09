import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../MainPage/Main";
import { FaHandsHelping as Meet } from "react-icons/fa";
import { COLORS } from "../constants";
const Start = () => {
  return (
    <Wrapper>
      <Starting>
        <Image>
          <PopUpImage />
        </Image>
        <TextArea>
          <Text>helloooooo</Text>
          <Button>Get Started</Button>
        </TextArea>
      </Starting>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: gray;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2;
`;
const Text = styled.h1``;
const Starting = styled.div`
  width: 600px;
  height: 500px;
  opacity: 2;
  background-color: white;
  z-index: 3;
  display: flex;
`;
const Image = styled.div``;
const PopUpImage = styled.div``;
const TextArea = styled.div`
  color: black;
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
export default Start;
