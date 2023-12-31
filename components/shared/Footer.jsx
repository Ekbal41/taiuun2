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
    <Box
      maxW={"8xl"}
      mx={"auto"}
      px={{
        base: "4",
        md: "10",
      }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={6}
        bg={"white"}
        py={12}
      >
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"md"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Programming
            </Link>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Web Development
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Mobile Development
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Data Science
            </Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"md"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Digital Marketing
            </Link>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Graphics Designing
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Video Editing
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              SEO
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"md"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              AI & ML
            </Link>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              UI/UX Designing
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Game Development
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Wordpress
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"md"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Business
            </Link>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Finance & Accounting
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Personal Development
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              IT & Software
            </Link>
          </Flex>
        </GridItem>{" "}
        <GridItem w="100%">
          <Flex direction={"column"}>
            <Heading
              fontSize={"md"}
              color={"blackAlpha.800"}
              mb={3}
              fontWeight={500}
            >
              Categories
            </Heading>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Marketing
            </Link>
            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Health & Fitness
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Music
            </Link>

            <Link
              fontSize={"md"}
              color={"blackAlpha.600"}
              mb={3}
              fontWeight={500}
            >
              Photography
            </Link>
          </Flex>
        </GridItem>
      </Grid>
      <Box
        borderTop={"1px"}
        borderColor={"gray.200"}
      >
        <Flex
          justifyContent={{
            base: "center",
            md: "space-between",
          }}
          alignItems={"center"}
          py={"18px"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            gap={{
              base: "4",
              md: "6",
            }}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"3xl"} color={"blackAlpha.600"}>
              taiuun
            </Text>
            <Text color={"blackAlpha.600"} mt={"8px"} fontSize={"md"}>
              © Taiuun Ltd
            </Text>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
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
              
            >
              <Icon as={BsInstagram} fontSize={20} />
            </Button>
            {/* <Button
              bg={"white"}
              ml={6}
              color={"blackAlpha.600"}
              rounded={"full"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Icon as={BsGlobe} fontSize={16} mr={2} /> English
            </Button> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
