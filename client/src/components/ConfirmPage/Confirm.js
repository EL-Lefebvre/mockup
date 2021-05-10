import React from "react";
import styled from "styled-components";
import { GiPartyPopper as Done } from "react-icons/gi";

import { COLORS } from "../constants";
import Main from "../MainPage/Main";


const Confirm = () => (
  <Main
    title={"Confirmation"}
    imageSrc={<Done size={30} fill={`${COLORS.third}`} />}
  >
    <Wrapper>
      <h1>You did it!</h1>
    </Wrapper>
  </Main>
);

const Wrapper = styled.div`
  display: flex;
`;

export default Confirm;
