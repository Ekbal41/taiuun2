import { ArrowLeftIcon, ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
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
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdContentCopy,
  MdFavoriteBorder,
  MdFemale,
  MdFlag,
  MdOutlineAlarm,
  MdOutlineAutoAwesome,
  MdOutlineCalendarMonth,
  MdOutlineMyLocation,
  MdOutlinePayment,
  MdOutlineThumbDownAlt,
} from "react-icons/md";

export default function JobCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box position={"relative"}>
        <Stack
          direction={"row"}
          spacing={2}
          pos={"absolute"}
          top={4}
          right={4}
        >
          <Button
            rounded={"full"}
            width={{
              base: "30px",
              md: "45px",
            }}
            h={{
              base: "35px",
              md: "45px",
            }}
            bg={"white"}
            shadow={"xs"}
          >
            <Icon
              as={MdOutlineThumbDownAlt}
              color={"green.500"}
              boxSize={6}
            />
          </Button>
          <Button
            bg={"white"}
            shadow={"xs"}
            width={{
              base: "30px",
              md: "45px",
            }}
            h={{
              base: "35px",
              md: "45px",
            }}
            rounded={"full"}
          >
            <Icon as={MdFavoriteBorder} boxSize={6} color={"green.500"} />
          </Button>
        </Stack>
        <Stack
          onClick={() => onOpen()}
          bg="white"
          p={8}
          shadow={"xs"}
          spacing={4}
          _hover={{
            transition: "all 0.2s",
            cursor: "pointer",
            backgroundColor: "blackAlpha.50",
            "& .heading": {
              color: "green.500",
            },
          }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              fontWeight={"semibold"}
              fontSize={"lg"}
              maxW={{
                base: "70%",
                md: "70%",
              }}
              _hover={{
                color: "green.500",
                textDecoration: "underline",
              }}
            >
              Need a babysitter for two toddlers Lorem ipsum dolor sit amet.
            </Text>
          </Flex>
          <Box>
            <Stack
              spacing={2}
            >
              <Flex gap={2} alignItems={"center"}>
                <Icon
                  mt={"1px"}
                  as={MdOutlineMyLocation}
                  boxSize={4}
                  color={"green.500"}
                />
                <Text>
                  Dhaka, Badda
                </Text>
              </Flex>
              <Flex gap={2} alignItems={"center"}>
                <Icon
                  as={MdOutlineAutoAwesome}
                  boxSize={4}
                  mt={1}
                  color={"green.500"}
                />
                <Text>
                  Highly Experienced
                </Text>
              </Flex>
              <Flex gap={2} alignItems={"center"}>
                <Icon
                  as={MdFemale}
                  boxSize={4}
                  mt={1}
                  color={"green.500"}
                />
                <Text>
                  Female
                </Text>
              </Flex>
              <Flex gap={2} alignItems={"center"}>
                <Icon
                  as={MdOutlinePayment}
                  boxSize={4}
                  mt={1}
                  color={"green.500"}
                />
                <Text
                  fontSize={"sm"}
                  mt={"4px"}
                >
                  200k - 500k
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Box>

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
                    Need a babysitter for two toddlers
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
                  <Text fontWeight={"semibold"} mb={2}>
                    Job Description
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </Text>
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
                  <Text fontWeight={"semibold"} mb={2}>
                    Skills Required{" "}
                    <Box as="span" pt={2}>
                      <Tooltip
                        hasArrow
                        label="Skills required for this job"
                        bg="green.300"
                        placement="top"
                        color={"white"}
                        py={2}
                        px={4}
                      >
                        <InfoIcon color={"green.500"} />
                      </Tooltip>
                    </Box>
                  </Text>
                  <Flex
                    mt={5}
                    gap={4}
                    flexWrap={"wrap"}
                  >
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        Web design
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        html
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        css
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        web development
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        Web design
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        react
                      </Text>
                    </Flex>
                    <Flex
                      rounded={"full"}
                      shadow={"xs"}
                      height={"25px"}
                      px={2}
                      bg={"blackAlpha.100"}
                      fontSize={"sm"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      textTransform={"capitalize"}
                    >
                      <Text
                        color={"blackAlpha.800"}
                      >
                        Chakra ui
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Grid
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderTop={"1px"}
                  borderRight={"1px"}
                  borderColor={"gray.100"}
                  templateColumns="repeat(2, 1fr)"
                  gap={6}
                >
                  <GridItem>
                    <Flex
                      justifyContent={"start"}
                      gap={2}
                    >
                      <Icon
                        as={MdOutlineAutoAwesome}
                        boxSize={4}
                        color={"green.500"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>
                          Experience Level
                        </Text>
                        <Text fontSize={"sm"} color={"gray.700"}>
                          Highly Experienced (5+ years)
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
                        as={MdOutlinePayment}
                        boxSize={4}
                        color={"green.500"}
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
                  <GridItem>
                    <Flex
                      justifyContent={"start"}
                      gap={2}
                    >
                      <Icon
                        as={MdOutlineCalendarMonth}
                        boxSize={4}
                        color={"green.500"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>
                          Joining Date
                        </Text>
                        <Text fontSize={"sm"} color={"gray.700"}>
                          1st January, 2022
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
                        as={MdOutlineAlarm}
                        boxSize={4}
                        color={"green.500"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>
                          Office Time
                        </Text>
                        <Text
                          fontSize={"sm"}
                          color={"gray.700"}
                        >
                          9:00 AM - 5:00 PM
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
                        as={MdFemale}
                        boxSize={4}
                        color={"green.500"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>
                          Gender
                        </Text>
                        <Text
                          fontSize={"sm"}
                          color={"gray.700"}
                        >
                          Female
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
                        as={MdOutlineMyLocation}
                        boxSize={4}
                        color={"green.500"}
                        mt={1}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={"semibold"}>
                          Location
                        </Text>
                        <Text
                          fontSize={"sm"}
                          color={"gray.700"}
                        >
                          Mirpur 10, Block C, Darussalam Arcade (Level 6)
                        </Text>
                      </Stack>
                    </Flex>
                  </GridItem>
                </Grid>

                <Flex
                  px={8}
                  py={4}
                  borderLeft={"1px"}
                  borderRight={"1px"}
                  borderTop={"1px"}
                  borderColor={"gray.100"}
                  gap={4}
                >
                  <Text fontWeight={"semibold"} mb={2}>
                    Job Type :
                  </Text>
                  <Text>
                    Full Time
                  </Text>
                </Flex>
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
                      Aplications :
                      <Box as="span" mx={2}>
                        <Tooltip
                          hasArrow
                          label="Number of applications received for this job"
                          bg="green.300"
                          placement="top"
                          color={"white"}
                          py={2}
                          px={4}
                        >
                          <InfoIcon color={"green.500"} />
                        </Tooltip>
                      </Box>
                      <Box as={"span"} fontWeight={"semibold"}>
                        Less than 10
                      </Box>
                    </Text>
                    <Text>
                      Last viewed by client:<Box as="span" mx={2}>
                        <Tooltip
                          hasArrow
                          label="Number of applications received for this job"
                          bg="green.300"
                          placement="top"
                          color={"white"}
                          py={2}
                          px={4}
                        >
                          <InfoIcon color={"green.500"} />
                        </Tooltip>
                      </Box>
                      <Box as={"span"} fontWeight={"semibold"}>
                        10 minutes ago
                      </Box>
                    </Text>
                    <Text>
                      Interviewing:<Box as="span" mx={2}>
                        <Tooltip
                          hasArrow
                          label="Number of applications received for this job"
                          bg="green.300"
                          placement="top"
                          color={"white"}
                          py={2}
                          px={4}
                        >
                          <InfoIcon color={"green.500"} />
                        </Tooltip>
                      </Box>
                      <Box as={"span"} fontWeight={"semibold"}>
                        1 person
                      </Box>
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
                          Name
                        </Text>
                        <Text
                          fontSize={"sm"}
                          color={"gray.700"}
                        >
                          John Doe
                        </Text>
                      </Flex>
                      <Flex alignItems={"start"} direction={"column"}>
                        <Text
                          fontWeight={"semibold"}
                        >
                          Institute
                        </Text>
                        <Text fontSize={"sm"} color={"gray.700"}>
                          Britaniya International School
                        </Text>
                      </Flex>
                      <Flex alignItems={"start"} direction={"column"}>
                        <Text
                          fontWeight={"semibold"}
                        >
                          Gender
                        </Text>
                        <Text fontSize={"sm"} color={"gray.700"}>
                          Female
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                  <Box
                    px={8}
                    pt={4}
                    pb={8}
                    borderBottom={"1px"}
                    borderColor={"gray.100"}
                  >
                    <Stack>
                      <Text fontWeight={"semibold"}>1 Posted Job</Text>
                      <Text
                        fontSize={"sm"}
                        color={"gray.700"}
                      >
                        Member Since : Jan 2021
                      </Text>
                    </Stack>
                  </Box>
                  <Box
                    px={8}
                    pt={4}
                    pb={8}
                  >
                    <Text
                      fontWeight={"semibold"}
                      mb={4}
                    >
                      Job Link
                    </Text>

                    <Flex
                      bg={"blackAlpha.50"}
                      py={2}
                      px={3}
                      borderRadius={"md"}
                      border="1px"
                      borderColor="gray.100"
                      color={"blackAlpha.700"}
                      fontFamily={"monospace"}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "green.50",
                        transition: "all 0.2s",
                        border: "1px",
                        borderColor: "green.500",
                      }}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Text>https://chakra-ui.com/docs</Text>
                      <Box>
                        <MdContentCopy />
                      </Box>
                    </Flex>
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
