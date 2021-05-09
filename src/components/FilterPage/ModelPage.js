import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HouseCard from "./HouseCard";
import Filter from "./Filter";
import houseData from "../../data/model";
import HouseLogo from "../../assets/house.svg";
import { COLORS } from "../constants";
const ModelPage = () => {
  const [price, setPrice] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [surface, setSurface] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const filteredResults = houseData.map((data) => {
      if (price < data.price) {
        return data;
      }
    });
    setFilteredData(filteredResults);
    console.log(filteredResults);
  }, [price]);
  console.log(filteredData);
  return (
    <Wrapper>
      <Header>
        <Text>
          Our Models <img src={HouseLogo} width="25" />
        </Text>

        <Button>
          {" "}
          <img src={HouseLogo} width="20" />
          My project
        </Button>
      </Header>
      <Main>
        <Filter
          price={price}
          setPrice={setPrice}
          bathrooms={bathrooms}
          setBathrooms={setBathrooms}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          surface={surface}
          setSurface={setSurface}
        />

        <HouseCard houseData={houseData} />
      </Main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  justify-content: space-between;
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
const Text = styled.h2`
  color: ${COLORS.primary};
  font-weight: bolder;
`;
const Image = styled.img``;
export default ModelPage;
