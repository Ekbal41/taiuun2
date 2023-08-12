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
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem
            colSpan={{
              base: 6,
              md: 2,
            }}
            py={4}
          >
            <Stack spacing={4}>
              <Box
                bg="white"
                p={4}
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
                      <Heading size={"md"} color={"gray.600"} mt={2}>
                        Ryan Florence
                      </Heading>
                      <Flex gap={2}>
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"yellow.400"} />
                        <Icon as={StarIcon} color={"gray"} />
                      </Flex>
                    </Flex>
                  </Flex>

                  <Icon as={EditIcon} color={"green.400"} boxSize={6} />
                </Flex>

                <Stack mt={4} spacing={1} fontSize={"sm"} color={"gray.600"}>
                  <Flex gap={2} alignItems={"center"}>
                    <Icon as={MdOutlineMyLocation} boxSize={4} />
                    <Text>New York City, NY</Text>
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
                    colorScheme="gray"
                    w={"50%"}
                    variant={"outline"}
                    color={"gray.500"}
                  >
                    See Public View
                  </Button>
                </Flex>
              </Box>
              <Box
                bg="white"
                p={4}
                shadow={"xs"}
                justifyContent={"space-between"}
              >
                <Heading
                  size={"md"}
                  color={"gray.600"}
                  mb={2}
                  fontWeight={"semibold"}
                >
                  About Me
                </Heading>
                In some layouts, you may need certain grid items to span
                specific amount of columns or rows instead of an even
                distribution. To achieve this, you need to pass the colSpan prop
                to the GridItem component to span across columns and also pass
                the rowSpan component to span across rows. You also need to
                specify the templateColumns and templateRows. In some layouts,
                you may need certain grid items to span specific amount of
                columns or rows instead of an even distribution. To achieve
                this, you need to pass the colSpan prop to the GridItem
                component to span across columns and also pass the rowSpan
                component to span across rows. You also need to specify the
                templateColumns and templateRows. In some layouts, you may need
                certain grid items to span specific amount of columns or rows
                instead of an even distribution. To achieve this, you need to
                pass
              </Box>
              <Box
                bg="white"
                p={4}
                shadow={"xs"}
                justifyContent={"space-between"}
              >
                <Heading
                  size={"md"}
                  color={"gray.600"}
                  mb={2}
                  fontWeight={"semibold"}
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
                            color={"gray.600"}
                            fontWeight={"semibold"}
                            fontSize={"lg"}
                          >
                            Ryan Florence
                          </Text>
                          <Flex gap={2}>
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"gray"} />
                          </Flex>{" "}
                          <Text
                            color={"green.400"}
                            fontFamily={"monospace"}
                            fontSize={"md"}
                          >
                            Says:
                          </Text>
                        </Flex>
                      </Flex>

                      <Flex direction={"column"} alignItems={"end"}>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Jan 2020 - Dec 202</Text>
                          <Icon
                            as={MdCalendarMonth}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Dhaka, Badda</Text>{" "}
                          <Icon
                            as={MdOutlineMyLocation}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>500k</Text>{" "}
                          <Icon
                            as={MdOutlinePayments}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Text color={"gray.600"} ps={16}>
                      To achieve this, you need to pass the colSpan prop to the
                      GridItem component to span across columns and also pass
                      the rowSpan component to span across rows. You also need
                      to specify the templateColumns and templateRows.
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
                            color={"gray.600"}
                            fontWeight={"semibold"}
                            fontSize={"lg"}
                          >
                            Ryan Florence
                          </Text>
                          <Flex gap={2}>
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"yellow.400"} />
                            <Icon as={StarIcon} color={"gray"} />
                          </Flex>{" "}
                          <Text
                            color={"green.400"}
                            fontFamily={"monospace"}
                            fontSize={"md"}
                          >
                            Says:
                          </Text>
                        </Flex>
                      </Flex>

                      <Flex direction={"column"} alignItems={"end"}>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Jan 2020 - Dec 202</Text>
                          <Icon
                            as={MdCalendarMonth}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>Dhaka, Badda</Text>{" "}
                          <Icon
                            as={MdOutlineMyLocation}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                          <Text>500k</Text>{" "}
                          <Icon
                            as={MdOutlinePayments}
                            boxSize={4}
                            color={"green"}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Text color={"gray.600"} ps={16}>
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
              md: 4,
            }}
            py={4}
          >
            <Stack spacing={4}>
              <Flex
                bg="white"
                p={4}
                shadow={"xs"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Heading size={"md"} color={"gray.600"} fontWeight={"semibold"}>
                  <Icon as={BellIcon} mb={1} mr={2} color={"green.400"} />
                  Jobs In Your Area
                  <Box as="span" ml={2} color={"gray.400"} fontSize={"lg"}>
                    (9)
                  </Box>
                </Heading>
                <Select placeholder="Filter By" w={"38"}>
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
