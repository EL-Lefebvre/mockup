import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { COLORS } from "../constants";
import { NavLink } from "react-router-dom";
import { BiCalendarCheck as Start } from "react-icons/bi";
import { BiNotepad as Needs } from "react-icons/bi";
import { FaMoneyBillAlt as Budget } from "react-icons/fa";
import { IoLocationSharp as Location } from "react-icons/io5";
import { BsHouseFill as Home } from "react-icons/bs";
import { FaHandsHelping as Meet } from "react-icons/fa";
import { GiPartyPopper as Done } from "react-icons/gi";

const SideBar = () => {
  const history = useLocation();
  console.log(history.pathname);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const path = history.pathname;
  }, [history]);
  console.log(toggle);
  return (
    <Wrapper>
      <Main>
        <List>
          <Nav
            to="/"
            style={{
              color: history.pathname === "/" ? `${COLORS.third}` : "black",
            }}
          >
            <Start size={30} />
          </Nav>
        </List>
        <List>
          <Nav
            to="/needs"
            style={{
              color:
                history.pathname === "/needs" ? `${COLORS.third}` : "black",
            }}
          >
            <Needs size={30} /> <Text> 1. Your needs</Text>
          </Nav>
        </List>

        <List>
          <Nav
            to="/budget"
            style={{
              color:
                history.pathname === "/budget" ? `${COLORS.third}` : "black",
            }}
          >
            <Budget size={30} />
            <Text> 2. Your budget </Text>
          </Nav>
        </List>
        <List>
          <Nav
            to="/lands"
            style={{
              color:
                history.pathname === "/lands" ? `${COLORS.third}` : "black",
            }}
          >
            <Location size={30} />
            <Text> 3. Our lands </Text>
          </Nav>
        </List>
        <List>
          <Nav
            to="/models"
            style={{
              color:
                history.pathname === "/models" ? `${COLORS.third}` : "black",
            }}
          >
            <Home size={30} />
            <Text> 4. Our Models </Text>
          </Nav>
        </List>
        <List>
          <Nav
            to="/meeting"
            style={{
              color:
                history.pathname === "/meeting" ? `${COLORS.third}` : "black",
            }}
          >
            <Meet size={30} />
            <Text> 5. Meeting </Text>
          </Nav>
        </List>
        <List>
          <Nav
            to="/confirm"
            style={{
              color:
                history.pathname === "/confirm" ? `${COLORS.third}` : "black",
            }}
          >
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
  width: 20vw;
  color: black;
  &:active {
    color: ${COLORS.third};
  }
  &:selected {
    color: ${COLORS.third};
  }
`;
export default SideBar;
