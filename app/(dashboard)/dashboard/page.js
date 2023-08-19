"use client";

import { BellIcon, EditIcon, StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  MdMailOutline,
  MdSchedule,
  MdOutlineMyLocation,
  MdOutlinePayments,
  MdCalendarMonth,
} from "react-icons/md";
import JobCard from "@/components/card/JobCard";

export default function Home() {
  return (
    <>
      <Box
        maxW={"8xl"}
        mx={"auto"}
        px={{
          base: "4",
          md: "10",
        }}
        py={8}
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem
            colSpan={{
              base: 6,
              lg: 2,
            }}
            py={4}
          >
            <Stack spacing={4}>
              <Box
                bg="white"
                p={8}
                shadow={"xs"}
                justifyContent={"space-between"}
              >
                <Flex justifyContent={"space-between"}>
                  <Flex gap={4}>
                    <Avatar
                      size="lg"
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />{" "}
                    <Flex direction={"column"} gap={2}>
                      <Text
                        fontSize={"xl"}
                        color={"blackAlpha.800"}
                        fontWeight={"600"}
                      >
                        Ryan Florence
                      </Text>
                      <Flex gap={2}>
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"gray"} />
                      </Flex>
                    </Flex>
                  </Flex>

                  <Icon as={EditIcon} color={"green.500"} boxSize={6} />
                </Flex>

                <Stack
                  mt={4}
                  spacing={1}
                  fontSize={"sm"}
                  color={"blackAlpha.800"}
                >
                  <Flex gap={2} alignItems={"center"}>
                    <Icon as={MdOutlineMyLocation} boxSize={4} />
                    <Text>Dhaka, Bangladesh</Text>
                  </Flex>
                  <Flex gap={2} alignItems={"center"}>
                    <Icon as={MdMailOutline} boxSize={4} />
                    <Text>ryanavo@gmail.com</Text>
                  </Flex>
                  <Flex gap={2} alignItems={"center"}>
                    <Icon as={MdSchedule} boxSize={4} />
                    <Text>Joined 2021</Text>
                  </Flex>
                </Stack>
                <Flex mt={4} gap={4}>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="md"
                    w={"50%"}
                  >
                    Detailed Profile
                  </Button>{" "}
                  <Button
                    colorScheme="blackAlpha"
                    w={"50%"}
                    variant={"outline"}
                  >
                    See Public View
                  </Button>
                </Flex>
              </Box>
              <Box
                bg="white"
                p={8}
                shadow={"xs"}
                justifyContent={"space-between"}
              >
                <Heading
                  size={"md"}
                  color={"blackAlpha.800"}
                  mb={2}
                  fontWeight={"500"}
                >
                  About Me
                </Heading>
                I am a Web Developer with almost two years of experience working
                in the field of Web Development. I am currently working as a
                freelancer for various companies ranging from small to big
                businesses. I have worked on projects involving the development
                and implementation of websites for non-profit organizations as
                well as public schools.
              </Box>
              <Box
                bg="white"
                p={{
                  base: 4,
                  md: 8,
                }}
                shadow={"xs"}
                justifyContent={"space-between"}
              >
                <Heading
                  size={"md"}
                  color={"blackAlpha.800"}
                  mb={2}
                  fontWeight={"500"}
                >
                  Employment History
                </Heading>
                <Stack spacing={4} mt={8}>
                  <Box borderBottom={"1px "} borderColor={"gray.200"} pb={4}>
                    <Flex justifyContent={"space-between"} alignItems={"start"}>
                      <Flex gap={4} alignItems={"start"}>
                        <Avatar
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <Flex direction={"column"} gap={2} alignItems={"start"}>
                          <Text
                            color={"green.500"}
                            fontWeight={"500"}
                            fontSize={"lg"}
                          >
                            Mugdha Rahman
                          </Text>
                          <Flex gap={2}>
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"gray"} />
                          </Flex>{" "}
                        </Flex>
                      </Flex>

                      <Flex
                        direction={"column"}
                        alignItems={"end"}
                        fontSize={"sm"}
                      >
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Jan 2020 - Dec 202</Text>
                          <Icon
                            as={MdCalendarMonth}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Dhaka, Badda</Text>{" "}
                          <Icon
                            as={MdOutlineMyLocation}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>500k</Text>{" "}
                          <Icon
                            as={MdOutlinePayments}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Text ps={16} fontSize={"sm"} mt={2}>
                      To achieve this, you need to pass the colSpan prop to the
                      GridItem component to span across columns and also pass.
                    </Text>
                  </Box>
                  <Box>
                    <Flex justifyContent={"space-between"} alignItems={"start"}>
                      <Flex gap={4} alignItems={"start"}>
                        <Avatar
                          name="Dan Abrahmov"
                          src="https://bit.ly/prosper-baba"
                        />
                        <Flex direction={"column"} gap={2} alignItems={"start"}>
                          <Text
                            color={"green.500"}
                            fontWeight={"500"}
                            fontSize={"lg"}
                          >
                            Aniket Roy
                          </Text>
                          <Flex gap={2}>
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"gray"} />
                          </Flex>{" "}
                        </Flex>
                      </Flex>

                      <Flex
                        direction={"column"}
                        alignItems={"end"}
                        fontSize={"sm"}
                      >
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Jan 2020 - Dec 202</Text>
                          <Icon
                            as={MdCalendarMonth}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Dhaka, Badda</Text>{" "}
                          <Icon
                            as={MdOutlineMyLocation}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>500k</Text>{" "}
                          <Icon
                            as={MdOutlinePayments}
                            boxSize={4}
                            color={"green.500"}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Text ps={16} fontSize={"sm"} mt={2}>
                      To achieve this, you need to pass the colSpan prop to the
                      GridItem component to span across columns and also pass
                      the rowSpan component to span across rows. You also need
                      to specify the templateColumns and templateRows.
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </GridItem>
          <GridItem
            colSpan={{
              base: 6,
              lg: 4,
            }}
            py={4}
          >
            <Stack spacing={0}>
              <Flex
                bg="white"
                px={6}
                py={4}
                shadow={"xs"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={4}
              >
                <Text
                  fontSize={"lg"}
                  color={"blackAlpha.800"}
                  fontWeight={"500"}
                >
                  <Icon as={BellIcon} mb={1} mr={2} color={"green.500"} />
                  Jobs In Your Area
                  <Box as="span" ml={2} color={"green.400"} fontSize={"lg"}>
                    (9)
                  </Box>
                </Text>
                <Select
                  placeholder="Filter By"
                  w={"38"}
                  focusBorderColor="green.500"
                >
                  <option value="option1">All</option>
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                  <option value="option3">Both</option>
                </Select>
              </Flex>
              <JobCard />
              <JobCard />
              <JobCard />
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
