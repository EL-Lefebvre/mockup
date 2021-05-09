import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FaShower as Bathroom } from "react-icons/fa";
import { RiHotelBedFill as Bedroom } from "react-icons/ri";
import { RiPriceTag3Line as Price } from "react-icons/ri";
const HouseCard = ({ filteredData }) => {
  return (
    <Wrapper>
      <Main>
        <Text>What we found for you: </Text>
      </Main>
      <List>
        {filteredData ? (
          filteredData.map((house) => {
            return (
              <Card key={house.name}>
                <ImageDiv>
                  <Image src={house.src} />
                </ImageDiv>
                <SubDiv>
                  <TextDiv>
                    <h3> {house.name} </h3>
                  </TextDiv>
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
          })
        ) : (
          <div>No results</div>
        )}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60vw;
`;
const Main = styled.div``;
const TextDiv = styled.div`
  padding-left: 10px;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: auto;
  height: 70vh;
  margin: 20px;
  max-height: 60vh;
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
  height: 25vh;
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
  padding-top: 10px;
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
  height: 30px;
  margin-bottom: 10px;
`;

const Number = styled.div``;
export default HouseCard;
