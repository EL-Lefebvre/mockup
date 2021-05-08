import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";
import SideBar from "./SideBar";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { createBrowserHistory } from "history";
const App = () => {
  const historyInstance = createBrowserHistory();
  return (
    <Router history={historyInstance}>
      <Wrapper>
        <SideBar />
        <Body />
      </Wrapper>
      <GlobalStyles />
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default App;
