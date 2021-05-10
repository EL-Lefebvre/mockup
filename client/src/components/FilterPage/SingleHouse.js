import React from "react";
import styled from "styled-components";
import "reactjs-popup/dist/index.css";
import { FaShower as Bathroom } from "react-icons/fa";
import { RiHotelBedFill as Bedroom } from "react-icons/ri";
import { RiPriceTag3Line as Price } from "react-icons/ri";
import { MdLandscape as Surface } from "react-icons/md";
import { BsDownload as Download } from "react-icons/bs";
import CustomButton from "../CustomButton";

import { COLORS } from "../constants";
import houseData from "../../data/model";
import FirstBluePrint from "../../assets/blueprintone.gif";
import SecondBluePrint from "../../assets/blueprinttwo.gif";

const SingleHouse = ({ name }) => {
  const singleData = houseData.filter((data) => data.name === name);

  return (
    <MainArea>
      {singleData &&
        singleData.map((house) => {
          return (
            <Main>
              <ImageDiv>
                <Image src={house.src} />
              </ImageDiv>
              <MainTitle>
                <h1> {house.name}</h1>
              </MainTitle>
              <Details>
                <DetailsDiv>
                  <Icon>
                    <Bathroom size={20} color={COLORS.secondary} />
                  </Icon>
                  <Number>{house.nbr_bedrooms}</Number>
                </DetailsDiv>
                <DetailsDiv>
                  <Icon>
                    {" "}
                    <Bedroom size={20} color={COLORS.secondary} />
                  </Icon>
                  <Number>{house.nbr_bathrooms}</Number>
                </DetailsDiv>

                <DetailsDiv>
                  <Icon>
                    {" "}
                    <Price size={20} color={COLORS.secondary} />
                  </Icon>
                  <Number>{house.price} $</Number>
                </DetailsDiv>
                <DetailsDiv>
                  <Icon>
                    {" "}
                    <Surface size={20} color={COLORS.secondary} />
                  </Icon>
                  <Number>{house.surface}</Number>
                </DetailsDiv>
              </Details>
              <BluePrint>
                <Print src={FirstBluePrint} />
                <Print src={SecondBluePrint} />
              </BluePrint>
            </Main>
          );
        })}
      <Footer>
        <Logo>
          <h2>Logo</h2>
        </Logo>
        <DownloadDiv>
          <Download size={20} color={"white"} />
        </DownloadDiv>
      </Footer>
    </MainArea>
  );
};

const MainArea = styled.div`
  background-color: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
const Main = styled.div``;
const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fdf7ef;
`;

const List = styled.div``;
const Text = styled.div``;
const ImageDiv = styled.div``;
const Image = styled.img`
  width: 30vw;
  height: 40vh;
`;

const Details = styled.div`
  display: flex;

  flex-wrap: wrap;
  height: 10vh;
  padding-top: 10px;
`;
const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  height: 20px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Logo = styled.div`
  background-color: ${COLORS.third};
  width: 10vw;
  display: flex;
  justify-content: center;
  height: 7vh;
`;
const Number = styled.div`
  font-weight: bold;
  padding-left: 10px;
`;
const Icon = styled.div``;

const BluePrint = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Print = styled.img`
  height: 15vh;
  width: 10vw;
`;
const DownloadDiv = styled.div`
  background-color: #be1e20;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
`;
const DownloadIcon = styled.img``;
export default SingleHouse;
