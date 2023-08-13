"use client";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import { useRef } from "react";
import Link from "next/link";

export default function RootNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <NavDrawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
      <Box
        borderBottom={"1px"}
        borderColor={"gray.200"}
      >
        <Flex
          justifyContent={"space-between"}
          py={"18px"}
          maxW={"8xl"}
          mx={"auto"}
          px={{
            base: "4",
            md: "10",
          }}
        >
          <Button
            mt={1}
            bg={"white"}
            _hover={{
              bg: "gray.50",
            }}
            ref={btnRef}
            onClick={onOpen}
            display={{ base: "flex", lg: "none" }}
          >
            <Icon as={HamburgerIcon} fontSize={20} />
          </Button>
          <Flex
            w={"full"}
            gap={"4"}
            fontSize={"lg"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Heading
                fontSize={"3xl"}
                color={"green.500"}
                mb={2}
              >
                Taiuun
              </Heading>
            </Box>

            <Flex
              display={{ base: "none", lg: "flex" }}
            >
              <Link
                href={"/jobs"}
              >
                <Text
                  cursor={"pointer"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                  color={"gray.600"}
                >
                  Find Job
                </Text>
              </Link>

              <Text
                cursor={"pointer"}
                py={"2"}
                px={"4"}
                rounded={"lg"}
                fontWeight={"semibold"}
                _hover={{
                  bg: "gray.50",
                }}
                color={"gray.600"}
              >
                Become a Seller
              </Text>
              <Link href="/dashboard">
                <Text
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                  color={"gray.600"}
                >
                  Dashboard
                </Text>
              </Link>
              <Link href="/signin">
                <Text
                  cursor={"pointer"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                  color={"gray.600"}
                >
                  Sign In
                </Text>
              </Link>
              <Link href="/join">
                <Button
                  ml={4}
                  textTransform={"uppercase"}
                  colorScheme="green"
                >
                  Join
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
