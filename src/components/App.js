import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";
import SideBar from "./SideBar";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import { createBrowserHistory } from "history";
const App = () => {
  const historyInstance = createBrowserHistory();
  return (
    <Router history={historyInstance}>
      <Wrapper>
        <Header />
        <Body />
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
