import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HouseCard from "./HouseCard";
import Filter from "./Filter";
import houseData from "../../data/model";
import { BsHouseFill as Home } from "react-icons/bs";
import Main from "../Main";
import { COLORS } from "../constants";
const ModelPage = () => {
  const [price, setPrice] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [surface, setSurface] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredResults = houseData.filter(
      (data) => bedrooms <= data.nbr_bedrooms
    );
    setFilteredData(filteredResults);
  }, [bedrooms]);

  useEffect(() => {
    const filteredResults = houseData.filter(
      (data) => bathrooms <= data.nbr_bathrooms
    );
    setFilteredData(filteredResults);
  }, [bathrooms]);

  useEffect(() => {
    const filteredResults = houseData.filter((data) => surface <= data.surface);
    setFilteredData(filteredResults);
  }, [surface]);

  useEffect(() => {
    const filteredResults = houseData.filter((data) => price <= data.price);
    setFilteredData(filteredResults);
  }, [price]);

  return (
    <Main
      title={"Our Models"}
      imageSrc={<Home size={30} fill={`${COLORS.third}`} />}
    >
      <Wrapper>
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

        <HouseCard filteredData={filteredData} />
      </Wrapper>
    </Main>
  );
};
const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
`;

export default ModelPage;
