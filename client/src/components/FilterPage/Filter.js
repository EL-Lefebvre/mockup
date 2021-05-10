import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

const Filter = ({
  price,
  setPrice,
  bathrooms,
  setBathrooms,
  bedrooms,
  setBedrooms,
  surface,
  setSurface,
}) => (
    <Wrapper>
      <Main>
        <List>
          <Text>Bedrooms: {bedrooms}</Text>

          <Slider
            type="range"
            min="0"
            max="10"
            value={bedrooms}
            onChange={(ev) => setBedrooms(ev.target.value)}
          />
        </List>
        <List>
          <Text>Bathrooms: {bathrooms}</Text>

          <Slider
            type="range"
            min="0"
            max="10"
            value={bathrooms}
            onChange={(ev) => setBathrooms(ev.target.value)}
          />
        </List>
        <List>
          <Text>Price Range: {price} $</Text>

          <Slider
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </List>
        <List>
          <Text>Square Footage: {surface} ft</Text>

          <Slider
            type="range"
            min="0"
            max="100000"
            step="10000"
            value={surface}
            onChange={(ev) => setSurface(ev.target.value)}
          />
        </List>
      </Main>
    </Wrapper>
  );

const Wrapper = styled.div`
  margin: 10px;
`;
const Main = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const List = styled.li`
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  padding-bottom: 10px;

  font-size: 110%;
`;
const Slider = styled.input`
  -webkit-appearance: none;
  -webkit-slider-thumb: none;

  &::-webkit-slider-runnable-track {
    background: #b5b1e0;
    height: 2px;
  }
  &::-moz-range-track {
    background: #b5b1e0;
    height: 2px;
  }
  &::-moz-range-progress {
    background: ${COLORS.fourth};
  }
  ::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background: ${COLORS.fourth};
    margin-top: -5px;
    border-radius: 50%;
  }
  &:focus {
    outline: none;
  }
`;
export default Filter;
