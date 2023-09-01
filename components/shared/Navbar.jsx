"use client";

import { ChevronDownIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
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
import {
  MdDevices,
  MdOutlineTabletAndroid,
  MdPhotoCamera,
  MdRoute,
  MdSupportAgent,
} from "react-icons/md";

export default function Navbar() {
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
              <Link
                href={"/profile"}
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
                  Profile
                </Text>
              </Link>

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
                Become a Seller
              </Text>
              <Menu isLazy>
                <MenuButton
                  color={"gray.600"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  Category <Icon as={ChevronDownIcon} />
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem
                    fontSize={"16px"}
                  >                    <Icon
                      as={MdDevices}
                      boxSize={5}
                      mr={2}
                      color={"blue.500"}
                    />
                    Web Development
                  </MenuItem>
                  <MenuItem
                    fontSize={"16px"}
                  >                    <Icon as={MdRoute} boxSize={5} mr={2} color={"red.500"} />
                    UI/UX Design
                  </MenuItem>
                  <MenuItem
                    fontSize={"16px"}
                  >                    <Icon
                      as={MdSupportAgent}
                      boxSize={5}
                      mr={2}
                      color={"orange.500"}
                    />
                    Digital Marketing
                  </MenuItem>
                  <MenuItem
                    fontSize={"16px"}
                  >                    <Icon
                      as={SunIcon}
                      boxSize={5}
                      mr={2}
                      color={"yellow.500"}
                    />
                    Data Science
                  </MenuItem>
                  <MenuItem
                    fontSize={"16px"}
                  >                    <Icon
                      as={MdOutlineTabletAndroid}
                      boxSize={5}
                      mr={2}
                      color={"cyan.500"}
                    />
                    Mobile Development
                  </MenuItem>
                  <MenuItem
                    fontSize={"16px"}
                  >
                    <Icon
                      as={MdPhotoCamera}
                      boxSize={5}
                      mr={2}
                      color={"teal.500"}
                    />
                    Photography
                  </MenuItem>
                </MenuList>
              </Menu>
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
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
