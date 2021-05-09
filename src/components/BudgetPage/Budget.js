import React from "react";
import styled from "styled-components";
import Main from "./MainPage/Main";
import { FaMoneyBillAlt as BudgetLogo } from "react-icons/fa";
const Budget = () => {
  return (
    <Main
      title={"Your budget"}
      imageSrc={<BudgetLogo size={30} fill={"green"} />}
    >
      <Wrapper>
        <Text>Budget</Text>
      </Wrapper>
    </Main>
  );
};
const Wrapper = styled.div``;
const Text = styled.h1``;
export default Budget;
