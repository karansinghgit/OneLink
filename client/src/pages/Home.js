import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Container className="flex flex-col justify-between">
        <Header></Header>
        <Hero></Hero>
        <Hero></Hero>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Home;
