import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Needs from "./Needs";
import Budget from "./Budget";
import Lands from "./Lands";
import ModelPage from "./HomeFilter/ModelPage";
import Meeting from "./Meeting";
import Confirm from "./Confirm";
import SideBar from "./SideBar";
import Footer from "./Footer";
const Body = () => {
  return (
    <Wrapper>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/needs">
          <Needs />
        </Route>
        <Route exact path="/budget">
          {" "}
          <Budget />
        </Route>
        <Route exact path="/lands">
          <Lands />
        </Route>
        <Route exact path="/models">
          <ModelPage />
        </Route>
        <Route exact path="/meeting">
          <Meeting />
        </Route>
        <Route exact path="/confirm">
          <Confirm />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
export default Body;
