"use client";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import { useRef } from "react";

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
          <Flex alignItems={"center"} gap={"4"} fontSize={"lg"}>
            <Heading
              fontSize={"3xl"}
              color={"green.500"}
              mb={2}
            >
              Taiuun
            </Heading>

            <Flex
              ml={8}
              display={{ base: "none", lg: "flex" }}
            >
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
              <Menu isLazy>
                <MenuButton
                  color={"gray.600"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  My Business <Icon as={ChevronDownIcon} fontSize={20} />
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed Tab</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
              </Menu>
              <Menu isLazy>
                <MenuButton
                  color={"gray.600"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  Cources <Icon as={ChevronDownIcon} fontSize={20} />
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed Tab</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
              </Menu>
              <Menu isLazy>
                <MenuButton
                  color={"gray.600"}
                  py={"2"}
                  px={"4"}
                  rounded={"lg"}
                  fontWeight={"semibold"}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  Others <Icon as={ChevronDownIcon} fontSize={20} />
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed Tab</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
          >
            {
              /* <Button
              bg={"white"}
              color={"gray.600"}
              _hover={{
                bg: "gray.50",
              }}

            >
              <Icon as={QuestionOutlineIcon} fontSize={20} />
            </Button> */
            }
            <Menu isLazy>
              <MenuButton
                ml={"4"}
              >
                <Avatar
                  h={"35px"}
                  w={"35"}
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
              </MenuButton>
              <MenuList width={"270px"}>
                {/* MenuItems are not rendered unless Menu is open */}
                <Box px={"4"}>
                  <Flex alignItems={"center"} gap="2" mt={"6"} mb={"4"}>
                    <Avatar
                      h={"40px"}
                      w={"40px"}
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Box
                      lineHeight={"1.2"}
                    >
                      <Text mb={"0"} fontWeight={"semibold"}>
                        Asif Ekbal
                      </Text>
                      <Text color={"gray.600"}>
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
                    pb={"1"}
                    h={"37px"}
                    borderRadius={"sm"}
                    _hover={{
                      bg: "gray.700",
                      color: "white",
                    }}
                  >
                    Open Tutor Panel
                  </Button>
                </Box>
                <Box
                  fontSize={"17px"}
                >
                  <MenuDivider />
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Refer A Friend</MenuItem>

                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billings & Payments</MenuItem>
                  <MenuDivider />
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </Box>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
