import React from "react";
import styled from "styled-components";
import { IoLocationSharp as Location } from "react-icons/io5";

import Main from "../MainPage/Main";

const Lands = () => (
    <Main title={"Our Lands"} imageSrc={<Location size={30} fill={"red"} />}>
      <Wrapper>
        <Text>Lands</Text>
      </Wrapper>
    </Main>
  );

const Wrapper = styled.div``;
const Text = styled.h1``;

export default Lands;
