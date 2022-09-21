import { Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import GoogleButton from "react-google-button";

type Props = {};

const Home = (props: Props) => {
  return (
    <Center>
      <Text mt={5}>Take your business to the next level</Text>
      <Image src={logo} />
      <GoogleButton
        className="mt-5"
        onClick={() => {
          window.location.href = "http://localhost:8080/api/user/google";
        }}
      />
    </Center>
  );
};

export default Home;
