"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsGlobe, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaPinterestSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box maxW={"8xl"} mx={"auto"} px={10}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        bg={"white"}
        py={12}
      >
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"lg"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"lg"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"lg"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"lg"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"lg"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>

            <Link
              fontSize={"lg"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Lorem uptao
            </Link>
          </Flex>
        </GridItem>
      </Grid>
      <Box
        borderTop={"1px"}
        borderColor={"gray.200"}
      >
        <Flex
          justifyContent={"space-between"}
          py={"18px"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            gap={{
              base: "4",
              lg: "6",
            }}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"3xl"} color={"blackAlpha.600"}>
              Taiuun
            </Text>
            <Text color={"blackAlpha.600"} mt={"8px"} fontSize={"lg"}>
              © Taiuun Ltd
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            justifyContent={"center"}
          >
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              width={"40px"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={FaFacebookSquare} fontSize={22} />
            </Button>
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              width={"40px"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={BsTwitter} fontSize={20} />
            </Button>
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              width={"40px"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={BsLinkedin} fontSize={20} />
            </Button>
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              width={"40px"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={FaPinterestSquare} fontSize={22} />
            </Button>
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              width={"40px"}
              _hover={{
                bg: "gray.100",
              }}
              mr={6}
            >
              <Icon as={BsInstagram} fontSize={20} />
            </Button>
            <Button
              bg={"white"}
              color={"blackAlpha.600"}
              rounded={"full"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={BsGlobe} fontSize={16} mr={2} /> English
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
