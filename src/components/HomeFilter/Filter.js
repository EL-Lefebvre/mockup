import React from "react";
import styled from "styled-components";
const Filter = () => {
  return (
    <Wrapper>
      <Main>
        <List>
          <Text>Bedrooms:</Text>

          <Slider type="range" min="1" max="1000000" value="25000" />
        </List>
        <List>
          <Text>Bathrooms:</Text>

          <Slider type="range" min="1" max="1000000" value="25000" />
        </List>
        <List>
          <Text>Price Range:</Text>

          <Slider type="range" min="1" max="1000000" value="25000" />
        </List>
        <List>
          <Text>Square Footage: :</Text>

          <Slider type="range" min="1" max="1000000" value="25000" />
        </List>
      </Main>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Main = styled.ul``;
const List = styled.li``;
const Text = styled.div``;
const Slider = styled.input``;
export default Filter;
