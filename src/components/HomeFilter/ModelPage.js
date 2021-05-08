import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HouseCard from "./HouseCard";
import Filter from "./Filter";

import {COLORS} from "../constants";
const ModelPage = () => {
  return (
    <Wrapper>
      <Header>
        <Text>Our Models</Text>
        <Button>My project</Button>
      </Header>
      <Main>
        <Filter />

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
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
const Button = styled.button``;
const Text = styled.h4``;
const Image = styled.img``;
export default ModelPage;
