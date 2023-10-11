import styled from "styled-components";
import dummy from "../../Assets/download.jpg";
import { AiFillCamera } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Registration = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const uploadImg = (e: any) => {
    const getFile = e.target.files?.[0];
    if (getFile) {
      const url = URL.createObjectURL(getFile);
      setImage(url);
    }
  };
  let getData: any = [];

  return (
    <div>
      <Container>
        <Main>
          <Image>
            <Img src={image ? image : dummy} />
            <ImageLabel htmlFor="pic">
              <AiFillCamera size={23} />
            </ImageLabel>
            <input
              type="file"
              name=""
              id="pic"
              onChange={uploadImg}
              accept="Image/jpg, Image/PNG, Image/JPEG"
              required
            />
          </Image>
          <Form>
            <Holder>
              <InputName>Enter your name</InputName>
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                required
              />
            </Holder>
            <Space>
              <HolderDouble>
                <Holder>
                  <InputName>Enter your email</InputName>
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </Holder>
                <Holder>
                  <InputName>Enter your phone</InputName>
                  <Input
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e: any) => {
                      setPhone(e.target.value);
                    }}
                    required
                  />
                </Holder>
              </HolderDouble>
            </Space>
            <Holder>
              <InputName>Enter your location</InputName>
              <Input
                placeholder="Enter your location"
                value={location}
                onChange={(e: any) => {
                  setLocation(e.target.value);
                }}
                // required
              />
            </Holder>

            <ButtonHolder>
              {image && name && location && email && phone ? (
                <Button
                  // to={"/"}
                  shake="shak"
                  onClick={() => {
                    let data = {
                      image,
                      location,
                      name,
                      email,
                      phone,
                    };
                    getData =
                      JSON.parse(localStorage.getItem("invited")!) || [];
                    getData.push(data);

                    localStorage.setItem("invited", JSON.stringify(getData));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  shake="shake "
                  // to={"/"}
                  onClick={() => {
                    let data = {
                      image,
                      location,
                      name,
                      email,
                      phone,
                    };
                    getData =
                      JSON.parse(localStorage.getItem("invited")!) || [];
                    getData.push(data);

                    localStorage.setItem("invited", JSON.stringify(getData));
                  }}
                  style={{ cursor: "not-allowed", display: "none" }}
                >
                  Submit
                </Button>
              )}
            </ButtonHolder>
          </Form>
        </Main>
      </Container>
    </div>
  );
};

export default Registration;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div<{ shake: string }>`
  background-color: darkorange;
  width: 42%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 25px 10px 0 0;
  color: white;
  text-transform: uppercase;
  border-radius: 3px;
  font-weight: bold;
  transition: all 350s;
  animation: ${({ shake }) => shake} 700ms 350ms;
  @keyframes shake {
    0% {
      transform: translateX(10px);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Space = styled.div`
  margin: 10px 0;
`;

const HolderDouble = styled.div`
  display: flex;
  width: 95%;
`;

const Holder = styled.div`
  width: 90%;
  height: 40px;
  position: relative;
  border-radius: 3px;
  border: 1px solid silver;
  margin: 10px;
`;

const InputName = styled.div`
  position: absolute;
  font-size: 14px;
  background-color: white;
  top: -10px;
  left: 20px;
  padding: 0 5px;
  font-weight: 500;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;

  &::placeholder {
    /* font-family: Poppins; */
  }
`;

const ImageLabel = styled.label`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 350ms;
  background-color: #fff7ee;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.div`
  width: 300px;
  min-height: 400px;
  margin-right: 10px;
  position: relative;
  margin-left: 30px;
  input {
    display: none;
  }
`;

const Form = styled.div`
  width: 500px;
  min-height: 200px;
  position: relative;
  @media (max-width: 515px) {
    width: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
