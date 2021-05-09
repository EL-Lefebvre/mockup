import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HouseCard from "./HouseCard";
import Filter from "./Filter";

import { COLORS } from "../constants";
const ModelPage = () => {
  const [price, setPrice] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [surface, setSurface] = useState(0);
  return (
    <Wrapper>
      <Header>
        <Text>Our Models</Text>
        <Button>My project</Button>
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

        <HouseCard />
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

  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 12px;
`;
const Text = styled.h2`
  color: ${COLORS.primary};
  font-weight: bolder;
`;
const Image = styled.img``;
export default ModelPage;
