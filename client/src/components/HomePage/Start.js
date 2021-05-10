import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHandsHelping as Meet } from "react-icons/fa";
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";

import People from "../../assets/people.webp";
import Main from "../MainPage/Main";
import { COLORS } from "../constants";

const Start = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/needs");
  };
  return (
    <Starting onClick={handleClick}>
      <Image>
        <PopUpImage src={People} />
      </Image>
      <TextArea>
        <Text>Welcome</Text>
        <h4>Let us help you find your dream house</h4>
        <TinyText>
          <Details>
            <p>
              Let us guide you step by step in the building of your new home. We
              will help you make the right choices for your home from the
              comfort of your living room.
            </p>
          </Details>
          <Details>
            <p>
              The next 5 steps will help us understand your project and your
              needs.
            </p>
          </Details>
        </TinyText>
        <ButtonArea>
          <Button>Get Started</Button>
        </ButtonArea>
      </TextArea>
    </Starting>
  );
};

const Starting = styled.div`
  width: 50vw;
  height: 75vh;
  opacity: 2;

  display: flex;
`;
const Image = styled.div`

`;
const PopUpImage = styled.img`
  width: 25vw;
  height: 100%;
`;
const Text = styled.h1`
  border-bottom: 15px solid ${COLORS.primary};
  width: 70px;
  padding-bottom: 5px;
`;
const TextArea = styled.div`
  padding-left: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80vh;
`;
const TinyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
`;
const Details = styled.div`
  font-size: 120%;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 20px;
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 100%;
`;
export default Start;
