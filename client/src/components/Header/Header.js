import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 200;
  border-bottom: 1px solid #d3d3d3;
`;

const Logo = styled.h2`
  margin: 0 1rem;
  font-size: 2rem;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
  margin: 0 1rem;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="text-black bg-gray-100">
        <Logo>OneLink</Logo>
        <Items>
          <Item>about</Item>
          <Item>features</Item>
          <Item>enter</Item>
        </Items>
      </HeaderWrapper>
    );
  }
}

export default Header;
