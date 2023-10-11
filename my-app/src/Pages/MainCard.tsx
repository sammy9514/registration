import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { icons } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import imag from "../Assets/blog-1.jpg";

interface iData {
  image: string;
  name: string;
  location: string;
  email: string;
  phone: number;
}

export const MainCard = () => {
  const [state, setState] = useState<number>(0);
  const [userState, setUserState] = useState<iData>();
  const countState = () => {
    if (state >= 1) {
      setState((el) => {
        return el - 1;
      });
    } else {
      setState((el) => {
        return el + 1;
      });
    }
  };

  useEffect(() => {
    setUserState(
      JSON.parse(localStorage.getItem("invited")!)[setUserState.length]
    );
    console.log("invited".length - 1);
  }, []);

  return (
    <div>
      <Container>
        <Card key={userState?.phone}>
          <Top>
            <Image src={userState?.image} />
            <Favourite onClick={countState}>
              <AiFillHeart />
            </Favourite>
            <Stack>Project Manager</Stack>
          </Top>
          <Div>Ogunyemi Ayomide</Div>
          <Title>
            <TitleText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              molestias consequatur nam suscipit aliquid necessitatibus,
              similique modi.
            </TitleText>
            <Time>
              <div>
                <AiOutlineClockCircle /> <p>2 days ago</p>
              </div>
              <p>
                <Icon>
                  <AiFillHeart />
                </Icon>
                <Likes>{state}</Likes>
              </p>
            </Time>
          </Title>
        </Card>
      </Container>
    </div>
  );
};

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const TitleText = styled.div`
  color: #333;
  font-size: 14px;
`;
const Likes = styled.div``;
const Icon = styled.div`
  font-size: 13px;
  color: red;
`;
const Title = styled.div`
  width: 85%;
  min-height: 20px;
  padding: 10px;
  background-color: rgb(255, 244, 229);
  margin: 10px auto;
  display: flex;
  color: darkorange;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex-direction: column;
  div {
    display: flex;
    gap: 6px;
  }

  p {
    font-size: 12px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
const Div = styled.div`
  margin: 30px 10px;
  font-size: 14px;
  transition: 250ms;
  font-weight: bold;
  &:hover {
    color: darkorange;
  }
`;
const Stack = styled.div`
  font-size: 15px;
  background-color: darkorange;
  font-weight: 500;
  color: white;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  bottom: -20px;
  left: 10px;
  border-radius: 2px;
`;
const Favourite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4e5;
  border: 1px solid darkorange;
  transition: 250ms;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Top = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;
const Card = styled.div`
  min-height: 300px;
  width: 250px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 10px;
`;
