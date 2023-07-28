import { SunIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import {
  MdBusinessCenter,
  MdDashboard,
  MdHelpCenter,
  MdPayment,
  MdSettings,
  MdVerticalSplit,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function NavDrawer({
  isOpen,
  onOpen,
  onClose,
  btnRef,
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mb={8}></DrawerHeader>

          <DrawerBody>
            <Accordion allowToggle>
              <Box
                ml={4}
                mb={4}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"4"}
              >
                <CgProfile
                  size={24}
                  style={{
                    color: "#48BB78",
                  }}
                />
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color={"gray.600"}
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                >
                  Profile
                </Box>
              </Box>
              <Box
                ml={4}
                mb={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"4"}
              >
                <MdDashboard
                  size={24}
                  style={{
                    color: "#48BB78",
                  }}
                />
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color={"gray.600"}
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                >
                  Dashboard
                </Box>
              </Box>

              <AccordionItem
                border={"none"}
                mb={1}
              >
                <h2>
                  <AccordionButton
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"4"}
                  >
                    <MdBusinessCenter
                      size={24}
                      style={{
                        color: "#48BB78",
                      }}
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"gray.600"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      My Business
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    ml={8}
                    flexDir={"column"}
                    gap={3}
                  >
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Business Plan
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Pricing
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      My Account
                    </Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border={"none"}
                mb={1}
              >
                <h2>
                  <AccordionButton
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"4"}
                  >
                    <MdVerticalSplit
                      size={24}
                      style={{
                        color: "#48BB78",
                      }}
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"gray.600"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      Gigs
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    ml={8}
                    flexDir={"column"}
                    gap={3}
                  >
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Business Plan
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Pricing
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      My Account
                    </Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={"none"}
                mb={1}
              >
                <h2>
                  <AccordionButton
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"4"}
                  >
                    <MdSettings
                      size={24}
                      style={{
                        color: "#48BB78",
                      }}
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"gray.600"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      Settings
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    ml={8}
                    flexDir={"column"}
                    gap={3}
                  >
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Business Plan
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Pricing
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      My Account
                    </Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={"none"}
                mb={1}
              >
                <h2>
                  <AccordionButton
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"4"}
                  >
                    <MdPayment
                      size={24}
                      style={{
                        color: "#48BB78",
                      }}
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"gray.600"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      Payment Methods
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    ml={8}
                    flexDir={"column"}
                    gap={3}
                  >
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Business Plan
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Pricing
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      My Account
                    </Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={"none"}
                mb={1}
              >
                <h2>
                  <AccordionButton
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"4"}
                  >
                    <MdHelpCenter
                      size={24}
                      style={{
                        color: "#48BB78",
                      }}
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"gray.600"}
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                    >
                      Help & Support
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    ml={8}
                    flexDir={"column"}
                    gap={3}
                  >
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Business Plan
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      Pricing
                    </Text>
                    <Text
                      fontSize={17}
                      _hover={{
                        color: "green.400",
                      }}
                      cursor={"pointer"}
                      transition={"all .3s ease"}
                    >
                      My Account
                    </Text>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Text
              fontSize={"xs"}
            >
              Terms & Conditions | Privacy Policy
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
