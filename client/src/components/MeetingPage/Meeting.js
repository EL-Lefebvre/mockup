import React from "react";
import styled from "styled-components";
import { FaHandsHelping as Meet } from "react-icons/fa";

import Main from "../MainPage/Main";
import { COLORS } from "../constants";

const Meeting = () =>  (
    <Main
      title={"Meeting"}
      imageSrc={<Meet size={30} fill={`${COLORS.third}`} />}
    >
      <Wrapper>
        <Text>Let's make it happen!</Text>
      </Wrapper>
    </Main>
  );

const Wrapper = styled.div``;
const Text = styled.h1``;
export default Meeting;
