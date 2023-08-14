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
      <Box
        maxW={"8xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
      >
        <Grid
          justifyContent={"space-between"}
          alignItems={"center"}
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        >
          <Box
            flex={1}
            textAlign={{
              base: "center",
              lg: "left",
            }}
            py={{
              base: "16",
              lg: 0,
            }}
          >
            <Text
              fontFamily={"cursive"}
              fontSize={{
                base: "6xl",
                md: "8xl",
              }}
              color={"green.500"}
              className="font-mirza"
              lineHeight={"0.8"}
            >
              Lorem ipsum dolor expedita
            </Text>
            <Text
              mt={6}
              fontSize={"2xl"}
              fontWeight={600}
              color={"blackAlpha.800"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              tenetur!
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
          <Flex
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            pt={8}
          >
            <Image
              src="/header.png"
              alt="Header image"
              rounded={"lg"}
              shadow={"2xl"}
              width={500}
              height={500}
            />
          </Flex>
        </Grid>
      </Box>
    </>
  );
}
