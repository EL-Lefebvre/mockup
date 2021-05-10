import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Body from "./MainPage/Body";
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";

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
