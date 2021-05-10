import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../MainPage/Main";
import { FaHandsHelping as Meet } from "react-icons/fa";
import Man from "../../assets/thumbsup.webp";
import { COLORS } from "../constants";
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";
const Start = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/needs");
  };
  return (
    <Starting onClick={handleClick}>
      <Image>
        <PopUpImage src={Man} />
      </Image>
      <TextArea>
        <Text>Get Started</Text>
       
        <TinyText>
          <Details>
         <Input type="text"/>
          </Details>
          <Details>
         <Input type="text"/>
          </Details>
          <Details>
         <Input type="text"/>
          </Details>
        </TinyText>
        <ButtonArea>
          <Button>Get Started</Button>
        </ButtonArea>
      </TextArea>
    </Starting>
  );
};

const Text = styled.h1`
  border-bottom: 15px solid ${COLORS.primary};
  width: 70px;
  padding-bottom: 5px;
`;
const Starting = styled.div`
  width: 50vw;
  height: 75vh;
  opacity: 2;
  background-color: white;
  z-index: 3;
  display: flex;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin-top: 20px;
`;
const Image = styled.div``;
const PopUpImage = styled.img`
  width: 25vw;
  height: 100%;
`;
const TextArea = styled.div`
  padding-left: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80vh;
`;
const TinyText = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
`;
const Input = styled.div`
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
