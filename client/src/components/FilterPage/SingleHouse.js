import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import houseData from "../../data/model";

import { FaShower as Bathroom } from "react-icons/fa";
import { RiHotelBedFill as Bedroom } from "react-icons/ri";
import { RiPriceTag3Line as Price } from "react-icons/ri";
import { MdLandscape as Surface } from "react-icons/md";
const SingleHouse = ({ name }) => {
  const singleData = houseData.filter((data) => data.name === name);
  console.log(singleData);
  return (
    <Wrapper>
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
                <div>
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
                </div>
                <div>
                  <DetailsDiv>
                    <Icon>
                      {" "}
                      <Price size={20} color={COLORS.secondary} />
                    </Icon>
                    <Number>{house.price}</Number>
                  </DetailsDiv>
                  <DetailsDiv>
                    <Icon>
                      {" "}
                      <Surface size={20} color={COLORS.secondary} />
                    </Icon>
                    <Number>{house.surface}</Number>
                  </DetailsDiv>
                </div>
              </Details>
            </Main>
          );
        })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: white;
  width: 40vw;
  height: 60vh;
`;
const Main = styled.div``;
const MainTitle = styled.div``;

const List = styled.div``;
const Text = styled.div``;
const ImageDiv = styled.div``;
const Image = styled.img`
  height: 500px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
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
const Number = styled.div`
  font-weight: bold;
  padding-left: 10px;
`;
const Icon = styled.div``;
export default SingleHouse;
