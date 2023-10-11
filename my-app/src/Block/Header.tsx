import React from "react";
import { styled } from "styled-components";
import logo from "../Assets/CodeLab Best Logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={logo} />
          <Button to="/register">Get Started</Button>
        </Main>
      </Container>
    </div>
  );
};

// const Main = styled.div``
// const Main = styled.div``
// const Main = styled.div``
const Button = styled(Link)`
  padding: 10px 32px;
  background-color: #fff4e5;
  border: 1px solid darkorange;
  border-radius: 50px;
  transition: all 350ms;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;

const Logo = styled.img`
  height: 25px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  box-shadow: rgba(255, 244, 229, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* background-color: #fff4e5; */
  position: fixed;
  z-index: 1;
`;
