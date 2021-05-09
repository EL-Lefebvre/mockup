import React from "react";
import styled from "styled-components";
import Main from "./MainPage/Main";
import { GiPartyPopper as Done } from "react-icons/gi";
import { COLORS } from "./constants";
const Confirm = () => {
  return (
    <Main
      title={"Confirmation"}
      imageSrc={<Done size={30} fill={`${COLORS.third}`} />}
    >
      <Wrapper>
        <Text>You did it!</Text>
      </Wrapper>
    </Main>
  );
};
const Wrapper = styled.div`
  display: flex;
`;
const Text = styled.h1``;

export default Confirm;
