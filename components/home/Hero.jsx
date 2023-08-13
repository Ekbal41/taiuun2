"use client";
import {
  Box,
  Button,
  createIcon,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        minH={"calc(100vh - 72px)"}
        backgroundColor={"green.500"}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <Box
          flex={1}
          px={{
            base: "8",
            md: "20",
          }}
          mt={4}
          color={"white"}
        >
          <Text fontFamily={"cursive"} fontSize={"4xl"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            numquam!
          </Text>
          <Text
            mt={4}
            fontSize={"lg"}
            color={"white"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            tenetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ipsum veniam inventore velit, similique est nulla harum animi modi
            non error!
          </Text>
          <Button
            mt={8}
            colorScheme={"green"}
            px={6}
            border={"1px"}
            borderColor={"white"}
          >
            Get Started
          </Button>
          <Button
            mt={8}
            colorScheme={"green"}
            px={6}
            ml={4}
            border={"1px"}
            borderColor={"white"}
          >
            Learn More
          </Button>
        </Box>
        <Box
          flex={1}
          px={{
            base: "8",
            md: "20",
          }}
          my={{
            base: "8",
            md: "0",
          }}
          display={{ base: "block", md: "none", lg: "block" }}
        >
          <Image src="/header.png" width={500} height={500} />
        </Box>
      </Grid>
    </>
  );
}
