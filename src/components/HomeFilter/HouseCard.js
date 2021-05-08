import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { houseData } from "../../data/model";
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
              <Image src={house.src} />
              {house.price}
            </Card>
          );
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Main = styled.div``;
const List = styled.div``;
const Text = styled.div``;
const Card = styled.div``;
const SubDiv = styled.div``;
const Image = styled.img`
  height: 50px;
`;
export default HouseCard;
