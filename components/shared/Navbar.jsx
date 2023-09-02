"use client";

import { ChevronDownIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import {
  MdDevices,
  MdOutlineTabletAndroid,
  MdPhotoCamera,
  MdRoute,
  MdSupportAgent,
} from "react-icons/md";
import { auth } from "../../firebase/fire";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const btnRef = useRef();
  const toast = useToast();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        forceUpdate();
        toast({
          title: "Message",
          description: "Logged out successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

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
                  fontWeight={"500"}
                  _hover={{
                    bg: "gray.50",
                  }}
                  color={"gray.600"}
                  fontSize={"16px"}
                >
                  Find Job
                </Text>
              </Link>
              {auth?.currentUser?.email
                ? (
                  <>
                    <Link href="/dashboard">
                      <Text
                        py={"2"}
                        px={"4"}
                        rounded={"lg"}
                        fontWeight={"500"}
                        _hover={{
                          bg: "gray.50",
                        }}
                        color={"gray.600"}
                        fontSize={"16px"}
                      >
                        Dashboard
                      </Text>
                    </Link>
                    <Flex
                      alignItems={"center"}
                    >
                      <Menu isLazy>
                        <MenuButton
                          ml={"4"}
                        >
                          <Avatar
                            h={"35px"}
                            w={"35px"}
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                        </MenuButton>
                        <MenuList width={"270px"}>
                          {/* MenuItems are not rendered unless Menu is open */}
                          <Box px={"4"}>
                            <Flex
                              alignItems={"center"}
                              gap="2"
                              mt={"6"}
                              mb={"4"}
                            >
                              <Avatar
                                h={"40px"}
                                w={"40px"}
                                name="Ryan Florence"
                                src="https://bit.ly/ryan-florence"
                              />
                              <Box
                                lineHeight={"1.2"}
                              >
                                <Text mb={"0"} fontWeight={"500"}>
                                  Asif Ekbal
                                </Text>
                                <Text
                                  color={"blackAlpha.700"}
                                  fontSize={16}
                                >
                                  asifekbal@gmail.com
                                </Text>
                              </Box>
                            </Flex>
                            <Button
                              w={"full"}
                              my={"4"}
                              size={"lg"}
                              border={"1px"}
                              bg={"white"}
                              h={"37px"}
                              color={"blackAlpha.800"}
                              fontSize={"16px"}
                              borderRadius={"sm"}
                              _hover={{
                                bg: "gray.700",
                                color: "white",
                              }}
                            >
                              Become An Employee
                            </Button>
                          </Box>
                          <Box
                            fontSize={"16px"}
                          >
                            <MenuDivider />
                            <MenuItem>
                              <Link href={"/profile"}>Profile</Link>
                            </MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider />
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuDivider />
                            <MenuItem
                              onClick={handleLogout}
                            >
                              Logout
                            </MenuItem>
                          </Box>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </>
                )
                : (
                  <>
                    <Link href="/signin">
                      <Text
                        cursor={"pointer"}
                        py={"2"}
                        px={"4"}
                        rounded={"lg"}
                        fontWeight={"500"}
                        _hover={{
                          bg: "gray.50",
                        }}
                        color={"gray.600"}
                        fontSize={"16px"}
                      >
                        Sign In
                      </Text>
                    </Link>
                    <Link href="/join">
                      <Button
                        ml={4}
                        textTransform={"uppercase"}
                        colorScheme="green"
                        fontSize={"16px"}
                      >
                        Join
                      </Button>
                    </Link>
                  </>
                )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
