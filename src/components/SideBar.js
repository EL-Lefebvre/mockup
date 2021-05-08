import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiCalendarCheck as Start } from "react-icons/bi";

import { BiNotepad as Needs } from "react-icons/bi";
import { FaMoneyBillAlt as Budget } from "react-icons/fa";
import { IoLocationSharp as Location } from "react-icons/io5";
import { BsHouseFill as Home } from "react-icons/bs";
import { FaHandsHelping as Meet } from "react-icons/fa";
import { GiPartyPopper as Done } from "react-icons/gi";

const SideBar = () => {
  return (
    <Wrapper>
      <Main>
        <List>
          <Nav to="/">
            <Start size={30} />
          </Nav>
        </List>
        <List>
          <Nav to="/needs">
            <Needs size={30} /> <Text> 1. Your needs</Text>
          </Nav>
        </List>

        <List>
          <Nav to="/budget">
            <Budget size={30} />
            <Text> 2. Your budget </Text>
          </Nav>
        </List>
        <List>
          <Nav to="/lands">
            <Location size={30} />
            <Text> 3. Our lands </Text>
          </Nav>
        </List>
        <List>
          <Nav to="/models">
            <Home size={30} />
            <Text> 4. Our Models </Text>
          </Nav>
        </List>
        <List>
          <Nav to="/meeting">
            <Meet size={30} />
            <Text> 5. Meeting </Text>
          </Nav>
        </List>
        <List>
          <Nav to="/confirm">
            <Done size={30} />
          </Nav>
        </List>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-decoration: none;

  height: 100vh;
  width: 20vw;
  justify-content: center;
  padding-left: 20px;
  padding-top: 30px;
`;
const Main = styled.ul``;
const List = styled.li``;
const Text = styled.h4`
  padding-left: 10px;
`;
const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: black;
  &:active {
    color: yellow;
  }
`;
export default SideBar;
