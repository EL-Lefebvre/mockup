import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
const CustomButton = ({ text }) => <Button>{text}</Button>;
const Button = styled.button`
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.primary};
  background-color: white;
  border-radius: 20px;
  font-weight: bolder;
  height: 30px;
  margin-bottom: 10px;
  &:hover {
    color: white;
    background-color: ${COLORS.primary};
    transition: all 1s;
  }
`;
export default CustomButton;
