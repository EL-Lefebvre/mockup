import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FaShower as Bathroom } from "react-icons/fa";
import { RiHotelBedFill as Bedroom } from "react-icons/ri";
import { RiPriceTag3Line as Price } from "react-icons/ri";
import { MdLandscape as Surface } from "react-icons/md";
import { GoHeart as Heart } from "react-icons/go";
import SingleHouse from "./SingleHouse";
const HouseCard = ({ filteredData }) => {
  const [toggle, setToggle] = useState(false);
  console.log(filteredData);

  const handleSelect = () => {
    console.log("hello");
  };
  return (
    <Wrapper>
      <Main>
        <Text>
          <h3>What we found for you:</h3>{" "}
        </Text>
      </Main>
      <List>
        {filteredData &&
          filteredData.map((house) => {
            return (
              <Card key={house.name} name={house.name}>
                <ImageDiv>
                  <Image src={house.src} />
                </ImageDiv>
                <SubDiv>
                  <TextDiv>
                    <h3> {house.name} </h3>
                  </TextDiv>
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
                  <ButtonDiv>
                    <Button>Select</Button>
                    <Button onClick={handleSelect}>See Project</Button>
                    <ButtonHeart onClick={() => setToggle(!toggle)}>
                      {house.liked ? (
                        <Heart size={30} color={"red"} />
                      ) : (
                        <Heart size={30} />
                      )}
                    </ButtonHeart>
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
  height: 60vh;
  margin: 20px;
  max-height: 60vh;
  width: 60vw;
`;
const Text = styled.div`
  font-weight: bolder;
  color: ${COLORS.primary};
  padding-left: 70px;
`;
const Card = styled.div`
  border: 1px lightgray solid;
  margin-bottom: 15px;
  max-height: 50vh;
  transition: all 1s;
  &:hover {
    opacity: 0.7;
  }
`;
const SubDiv = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
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
const ImageDiv = styled.div`
  min-width: 15vw;
`;
const Image = styled.img`
  min-width: 15vw;
  width: 15vw;
  height: 25vh;
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
  &:hover {
    color: white;
    background-color: ${COLORS.primary};
    transition: all 1s;
  }
`;
const ButtonHeart = styled.button`
  border: none;
  color: ${COLORS.primary};
  background-color: white;
  border-radius: 20px;
  font-weight: bolder;
  height: 30px;
  margin-bottom: 10px;
  &:hover {
    color: red;

    transition: all 1s;
  }
`;
const Number = styled.div`
  font-weight: bold;
  padding-left: 10px;
`;
const Icon = styled.div``;
export default HouseCard;
