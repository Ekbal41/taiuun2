import {
  ArrowLeftIcon,
  AttachmentIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdFlag,
  MdOutlineMyLocation,
  MdOutlinePayments,
  MdShare,
  MdStars,
} from "react-icons/md";

export default function JobCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack
        onClick={() => onOpen()}
        bg="white"
        p={4}
        shadow={"xs"}
        spacing={4}
        _hover={{
          transition: "all 0.2s",
          cursor: "pointer",
          backgroundColor: "green.50",
          "& .heading": {
            color: "green.500",
          },
        }}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {" "}
          <Heading
            size={"md"}
            color={"green.500"}
            fontWeight={"semibold"}
          >
            Need a babysitter for 2 kids
          </Heading>
          <Icon as={MdShare} boxSize={6} color={"green.500"} />
        </Flex>
        <Box>
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
        </Box>
        <Flex gap={4}>
          <Flex gap={2} alignItems={"center"}>
            <Icon as={MdOutlinePayments} boxSize={4} color={"green"} />
            <Text>500k</Text>
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Icon
              as={MdOutlineMyLocation}
              boxSize={4}
              color={"green"}
            />
            <Text>Dhaka, Badda</Text>
          </Flex>
        </Flex>
      </Stack>

      <DetailsDrawer
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}

function DetailsDrawer({
  onClose,
  isOpen,
}) {
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justifyContent={"space-between"}>
              <Button
                colorScheme="green"
                variant="ghost"
                onClick={onClose}
              >
                <ArrowLeftIcon />
              </Button>
              <Flex gap={2} alignItems={"center"} color={"green.500"}>
                <Icon as={ExternalLinkIcon} boxSize={4} mt={1} />
                <Text
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                  fontSize={"md"}
                >
                  Open in a new window
                </Text>
              </Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody mt={2} mb={8}>
            <Grid
              templateColumns={"repeat(12, 1fr)"}
            >
              <GridItem
                colSpan={{ base: 12, md: 8, lg: 7 }}
              >
                <Box
                  p={8}
                  borderLeft={"1px"}
                  borderTop={"1px"}
                  borderBottom={"1px"}
                  borderRight={{
                    base: "1px",
                    md: "none",
                  }}
                  borderColor={"gray.100"}
                >
                  <Heading
                    fontSize={"25px"}
                    fontWeight={"semibold"}
                  >
                    Need a babysitter for 2 kids
                  </Heading>
                </Box>
                <Box
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderRight={{
                    base: "1px",
                    md: "none",
                  }}
                  borderColor={"gray.100"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
                <Grid
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderTop={"1px"}
                  borderRight={{
                    base: "1px",
                    md: "none",
                  }}
                  borderColor={"gray.100"}
                  templateColumns="repeat(2, 1fr)"
                >
                  <GridItem>
                    <Flex
                      justifyContent={"start"}
                      gap={2}
                    >
                      <Icon
                        as={MdStars}
                        boxSize={4}
                        color={"green"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>Intermediate</Text>
                        <Text fontSize={"sm"} color={"gray.700"}>
                          I am looking for a mix of experience and value
                        </Text>
                      </Stack>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      justifyContent={"start"}
                      gap={2}
                    >
                      <Icon
                        as={MdOutlinePayments}
                        boxSize={4}
                        color={"green"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>Salary</Text>
                        <Text
                          fontSize={"sm"}
                          color={"gray.700"}
                        >
                          500K BDT - 600K BDT
                        </Text>
                      </Stack>
                    </Flex>
                  </GridItem>
                </Grid>
                <Box
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderRight={"1px"}
                  borderTop={"1px"}
                  borderColor={"gray.100"}
                >
                  Search bar is nothing but the ChatGPT integrated with an
                  internet search engine. It should be fast and quick to show
                  the exact same picture on my website with size and other
                  details. Meaning it should transform the fonds, size chart
                  according to my website theme.
                </Box>
                <Box
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderRight={"1px"}
                  borderTop={"1px"}
                  borderColor={"gray.100"}
                >
                  Search bar is nothing but the ChatGPT integrated with an
                  internet search engine. It should be fast and quick to show
                  the exact same picture on my website with size and other
                  details. Meaning it should transform the fonds, size chart
                  according to my website theme.
                </Box>
                <Box
                  px={8}
                  py={4}
                  border={"1px"}
                  borderColor={"gray.100"}
                >
                  <Text
                    fontWeight={"semibold"}
                    mb={4}
                  >
                    Activity on this job
                  </Text>
                  <Stack spacing={2}>
                    <Text>
                      Aplications :{" "}
                      <Box as={"span"} fontWeight={"semibold"}>10</Box>
                    </Text>
                    <Text>
                      Last viewed by client:{" "}
                      <Box as={"span"} fontWeight={"semibold"}>
                        10 minutes ago
                      </Box>
                    </Text>
                    <Text>
                      Interviewing:{" "}
                      <Box as={"span"} fontWeight={"semibold"}>1</Box>
                    </Text>
                  </Stack>
                </Box>
              </GridItem>
              <GridItem
                colSpan={{ base: 12, md: 4, lg: 5 }}
                mt={{
                  base: 4,
                  md: 0,
                }}
              >
                <Box shadow={"xs"}>
                  <Box
                    px={8}
                    pt={8}
                    pb={4}
                    borderBottom={"1px"}
                    borderColor={"gray.100"}
                  >
                    <Button
                      colorScheme="green"
                      w={"full"}
                      mb={4}
                    >
                      Apply Now
                    </Button>
                    <Button
                      colorScheme="green"
                      w={"full"}
                      variant={"outline"}
                      mb={4}
                    >
                      💖 Save Job
                    </Button>
                    <Flex gap={2} alignItems={"center"} color={"green.500"}>
                      <Icon as={MdFlag} boxSize={4} mt={1} />
                      <Text>Report This Job</Text>
                    </Flex>
                  </Box>
                  <Box
                    px={8}
                    py={4}
                    borderBottom={"1px"}
                    borderColor={"gray.100"}
                  >
                    <Text
                      fontWeight={"semibold"}
                      mb={4}
                    >
                      About The Employer
                    </Text>

                    <Stack spacing={2}>
                      <Flex alignItems={"start"} direction={"column"}>
                        <Text
                          fontWeight={"semibold"}
                        >
                          Dhaka
                        </Text>
                        <Text>Mohakhali</Text>
                      </Flex>
                      <Text fontWeight={"semibold"}>1 Posted Job</Text>
                      <Text>
                        Member Since: 1 month ago
                      </Text>
                    </Stack>
                  </Box>
                  <Box px={8} pt={4} pb={8}>
                    <Text
                      fontWeight={"semibold"}
                      mb={4}
                    >
                      Job Link
                    </Text>

                    <Box
                      bg={"gray.100"}
                      p={2}
                      borderRadius={"md"}
                      border="1px"
                      borderColor="gray.100"
                      color={"gray.500"}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "green.50",
                        transition: "all 0.2s",
                        border: "1px",
                        borderColor: "green.500",
                      }}
                    >
                      https://chakra-ui.com/docs/components/grid/usage
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
