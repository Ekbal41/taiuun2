"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AtSignIcon,
  ChatIcon,
  CloseIcon,
  HamburgerIcon,
  Search2Icon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"gray.800"} px={4}>
        <Box maxW={"5xl"} mx={"auto"}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <Box
                color={"yellow.400"}
                fontWeight={"bold"}
                fontSize={"3xl"}
                fontFamily={"cursive"}
              >
                ALPHA
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.700",
                  }}
                  href={"#"}
                  color={"yellow.400"}
                >
                  Explore
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.700",
                  }}
                  href={"#"}
                  color={"gray.400"}
                >
                  Top View
                </Link>
              </HStack>
            </HStack>
            <Flex alignItems={"center"} gap={2}>
              <IconButton
                size={"lg"}
                icon={<Search2Icon />}
                aria-label={"Open Menu"}
                variant={"ghost"}
                color={"gray.400"}
                _hover={{
                  bg: "gray.700",
                }}
              />
              <IconButton
                size={"lg"}
                icon={<ChatIcon />}
                aria-label={"Open Menu"}
                variant={"ghost"}
                color={"gray.400"}
                _hover={{
                  bg: "gray.700",
                }}
              />
              <IconButton
                size={"lg"}
                icon={<AtSignIcon />}
                aria-label={"Open Menu"}
                variant={"ghost"}
                color={"gray.400"}
                _hover={{
                  bg: "gray.700",
                }}
              />
              <IconButton
                size={"lg"}
                mb={1}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                variant={"ghost"}
                color={"yellow.400"}
                _hover={{
                  bg: "gray.700",
                }}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          </Flex>

          {isOpen
            ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    fontWeight={"bold"}
                    fontSize={"lg"}
                    _hover={{
                      textDecoration: "none",
                      bg: "gray.700",
                    }}
                    href={"#"}
                    color={"yellow.400"}
                  >
                    Explore
                  </Link>
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    fontWeight={"bold"}
                    fontSize={"lg"}
                    _hover={{
                      textDecoration: "none",
                      bg: "gray.700",
                    }}
                    href={"#"}
                    color={"yellow.400"}
                  >
                    Top View
                  </Link>
                </Stack>
              </Box>
            )
            : null}
        </Box>
      </Box>
    </>
  );
}
