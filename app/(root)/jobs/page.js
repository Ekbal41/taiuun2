"use client";
import JobCard from "@/components/card/JobCard";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  MdOutlineApps,
  MdOutlineReorder,
  MdOutlineRssFeed,
  MdSearch,
} from "react-icons/md";

export default function Home() {
  return (
    <>
      <Box
        maxW={"8xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
      >
        <Grid templateColumns="repeat(12, 1fr)" gap={6} py={8}>
          <GridItem
            colSpan={{
              base: 12,
              lg: 4,
            }}
          >
            <Box p={8}>
              <Text fontSize={"2xl"} fontWeight={400}>
                Filter By
              </Text>
              <Accordion defaultIndex={[0]} allowMultiple mt={8}>
                <AccordionItem borderTop={"none"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Experience level
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <RadioGroup defaultValue="2">
                      <Stack spacing={2} direction="column">
                        <Radio colorScheme="green" value="1">
                          Beginner
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          Intermediate
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          Highly Skilled
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Job Type
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Number of applicants
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <RadioGroup defaultValue="2">
                      <Stack spacing={2} direction="column">
                        <Radio colorScheme="green" value="1">
                          Less than 5
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          About 5 - 10
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          About 10 - 20
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{
              base: 12,
              lg: 8,
            }}
            shadow={"xs"}
          >
            <Box p={8}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={4}
              >
                <Input placeholder="Search here..." />
                <Button colorScheme={"green"}>
                  <Icon as={MdSearch} boxSize={6} mt={1} />
                  <Text
                    ml={1}
                    display={{
                      base: "none",
                      md: "block",
                    }}
                  >
                    Search{" "}
                  </Text>
                </Button>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={4}
                my={8}
                direction={["column", "row"]}
              >
                <Flex>
                  <Icon
                    as={MdOutlineRssFeed}
                    color={"green.500"}
                    boxSize={6}
                    mr={2}
                  />
                  <Box
                    as={"span"}
                    fontWeight={"semibold"}
                    mr={1}
                    color={"blackAlpha.800"}
                  >
                    234
                  </Box>{" "}
                  Jobs found
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={4}
                  direction={["column", "row"]}
                >
                  <Flex justifyContent={"start"} alignItems={"center"} gap={4}>
                    <Text color={"blackAlpha.800"} fontWeight={"semibold"}>
                      {" "}
                      Short :
                    </Text>
                    <Box>
                      {" "}
                      <Select size={"sm"}>
                        <option value="option1">Newest</option>
                        <option value="option2">Relevance</option>
                        <option value="option3">Oldest</option>
                        <option value="option3">Saved</option>
                      </Select>
                    </Box>
                  </Flex>
                  <Flex justifyContent={"start"} alignItems={"center"} gap={4}>
                    <Text color={"blackAlpha.800"} fontWeight={"semibold"}>
                      {" "}
                      View :
                    </Text>
                    <Box>
                      <Button colorScheme={"green"} size={"sm"} mr={2}>
                        {" "}
                        <Icon as={MdOutlineReorder} boxSize={6} />
                      </Button>
                      <Button size={"sm"}>
                        {" "}
                        <Icon as={MdOutlineApps} boxSize={6} />
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              px={{
                base: "0",
                md: "8",
              }}
            >
              <JobCard />
              <JobCard />

              <JobCard />

              <JobCard />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
