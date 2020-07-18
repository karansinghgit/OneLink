import React, { Component } from "react";
import styled from "styled-components";
import hero from "./hero.jpg";
const HeroWrapper = styled.div`
  width: 100%;
  /* min-height: 600px; */
  display: flex;
  flex-direction: row;
  /* automatically take remaining height */

  flex: auto;
`;

const BigText = styled.div`
  width: 40%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 80px;
  font-weight: lighter;
  font-size: 4rem;
  font-family: "Righteous", cursive;
`;

const BigImage = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 0% 100%, 100% 100%, 100% 0%);
`;

const BigButton = styled.button`
  font-size: 2rem;
  width: 50%;
  border-radius: 10px;
  padding: 10px 0px;
  /* background-color: #8f8cd3; */
`;

class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <BigText>
          <h1 className=" text-indigo-600">The Front Page</h1>
          <h1 className="font-light text-3xl">
            for your entire social media presence
          </h1>
          <br></br>
          <BigButton className="bg-indigo-400">Get Started</BigButton>
        </BigText>
        <BigImage src={hero}></BigImage>
      </HeroWrapper>
    );
  }
}

export default Hero;
