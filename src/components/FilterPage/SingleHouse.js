import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import houseData from "../../data/model";
const SingleHouse = ({ name }) => {
  const singleData = houseData.filter((data) => data.name === name);
  console.log(singleData);
  return <Wrapper></Wrapper>;
};
const Wrapper = styled.div``;
const Main = styled.ul``;
const List = styled.li``;
const Text = styled.div``;
export default SingleHouse;
