import React from "react";
import styled from "styled-components";
import Main from "../MainPage/Main";
import { BiNotepad as NeedsLogo } from "react-icons/bi";
import { COLORS } from "../constants";
const Needs = () => {
  return (
    <Main
      title={"Your needs"}
      imageSrc={<NeedsLogo size={30} fill={`${COLORS.third}`} />}
    >
      <Wrapper>
        <Text>Hello</Text>
      </Wrapper>
    </Main>
  );
};

const Wrapper = styled.div``;
const Text = styled.h1``;
export default Needs;
