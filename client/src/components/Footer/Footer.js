import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  font-size: 1rem;
  font-family: "Bree Serif";
  border-top: 1px solid #d3d3d3;
`;

class Footer extends Component {
  render() {
    return <FooterWrapper className="">code hosted on Github</FooterWrapper>;
  }
}

export default Footer;
