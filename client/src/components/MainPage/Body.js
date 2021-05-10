import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from "../HomePage/Home";
import Needs from "../NeedsPage/Needs";
import Budget from "../BudgetPage/Budget";
import Lands from "../LandsPage/Lands";
import ModelPage from "../FilterPage/ModelPage";
import Meeting from "../MeetingPage/Meeting";
import Confirm from "../ConfirmPage/Confirm";
import SideBar from "./SideBar";


const Body = () =>  (
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


const Wrapper = styled.div`
  display: flex;
`;
export default Body;
