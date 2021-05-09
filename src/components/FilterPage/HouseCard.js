import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import houseData from "../../data/model";
import { FaShower as Bathroom } from "react-icons/fa";
import { RiHotelBedFill as Bedroom } from "react-icons/ri";
import { RiPriceTag3Line as Price } from "react-icons/ri";
const HouseCard = () => {
  return (
    <Wrapper>
      <Main>
        <Text>What we found for you: </Text>
      </Main>
      <List>
        {houseData.map((house) => {
          return (
            <Card>
              <ImageDiv>
                <Image src={house.src} />
              </ImageDiv>
              <SubDiv>
                <TextDiv> {house.name}</TextDiv>
                <Details>
                  <DetailsDiv>
                    <Bathroom size={20} color={COLORS.secondary} />
                    <Number>{house.nbr_bedrooms}</Number>
                  </DetailsDiv>
                  <DetailsDiv>
                    <Bedroom size={20} color={COLORS.secondary} />
                    <Number>{house.nbr_bathrooms}</Number>
                  </DetailsDiv>
                  <DetailsDiv>
                    <Price size={20} color={COLORS.secondary} />
                    <Number>{house.price}</Number>
                  </DetailsDiv>
                </Details>
                <ButtonDiv>
                  <Button>Select</Button>
                  <Button>See Project</Button>
                </ButtonDiv>
              </SubDiv>
            </Card>
          );
        })}
      </List>
    </Wrapper>
  );
};



const Wrapper = styled.div`
  width: 65vw;
`;
const Main = styled.div``;
const TextDiv = styled.div``;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: auto;
  height: 60vh;
  margin: 20px;
`;
const Text = styled.div`
  font-weight: bolder;
  color: ${COLORS.primary};
`;
const Card = styled.div`
  border: 1px lightgray solid;
  margin: 10px;
`;
const SubDiv = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 7vh;
`;
const DetailsDiv = styled.div`
  display: flex;
`;
const ImageDiv = styled.div``;
const Image = styled.img`
  height: 170px;
  width: 220px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.primary};
  background-color: white;
  border-radius: 20px;
  font-weight: bolder;
`;

const Number = styled.div``;
export default HouseCard;
