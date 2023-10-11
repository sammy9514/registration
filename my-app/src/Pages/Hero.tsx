import React from "react";
import styled from "styled-components";
import video from "../Assets/WhatsApp Video 2023-09-08 at 11.30.02 PM.mp4";

export const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <Video src={video} autoPlay muted />
          <Black />
          <Comp>Word</Comp>
        </Main>
      </Container>
    </div>
  );
};

// const Main = styled.div``
// const Main = styled.div``
const Comp = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Black = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.442);
  position: absolute;
  top: 0;
  left: 0;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff4e5;
  /* padding-top: 100px; */
  background-attachment: fixed;
`;
