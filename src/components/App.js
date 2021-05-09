import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./MainPage/Body";
import SideBar from "./MainPage/SideBar";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";
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
