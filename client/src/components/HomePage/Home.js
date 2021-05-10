import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Landing from "../../assets/landing.webp";
import Maket from "../../assets/maket.png";
import { useHistory } from "react-router-dom";
import Start from "./Start";
import Popup from "reactjs-popup";
const Home = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setToggle(true);
  };
  return (
    <>
      {!toggle ? (
        <Wrapper onClick={handleClick}>
          <ImageDiv>
            <MainImage src={Landing} />
          </ImageDiv>
          <MainArea>
            <Logo src={Maket} />
            <Text>
              <Title>Home building, simplified.</Title>
            </Text>
          </MainArea>
        </Wrapper>
      ) : (
        <PopWrapper>
          <Popup defaultOpen position="top center" closeOnDocumentClick>
            <Start toggle={toggle} />
          </Popup>
        </PopWrapper>
      )}
    </>
  );
};
const PopWrapper = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100vh;

  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2;
  background-color: lightgray;
`;
const Wrapper = styled.div`
  top: 0;
  animation: floatBubble 2s inifnate;

  &:hover {
    filter: invert(0.2);
  }
  position: absolute;
  transition: all 1s;
  width: 100%;
  height: 50vh;
`;
const ImageDiv = styled.div`
  top: 0;
  width: 100%;
  z-index: 2;
  height: 50%;
`;
const MainImage = styled.img`
  width: 100%;
  filter: sepia(90%) hue-rotate(190deg) saturate(900%) grayscale(70%);
`;
const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const Logo = styled.img`
  height: 200px;
  width: 230px;
  filter: brightness(0) invert(1);
`;
const Text = styled.div``;
const Title = styled.h1`
  color: white;
`;
export default Home;
