"use client";
import JobCard from "@/components/card/JobCard";
import { Search2Icon } from "@chakra-ui/icons";
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
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdOutlineApps,
  MdOutlineReorder,
  MdOutlineRssFeed,
  MdSearch,
} from "react-icons/md";

export default function Home() {
  const [salaryRange, setSalaryRange] = useState([0, 15000]);
  const [gridCol, setGridCol] = useState(1);
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
            <Box px={8}>
              <Text fontSize={"2xl"} fontWeight={"semibold"} mx={4} mt={0}>
                Filter By
              </Text>
              <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple mt={8}>
                <AccordionItem borderTop={"none"}>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={4}
                      mb={3}
                    >
                      <Input
                        pb={1}
                        placeholder="Search category..."
                        focusBorderColor="green.500"
                      />
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
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
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (234)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          Intermediate
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (2454)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          Highly Skilled
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (24)
                          </Box>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Salary Range
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pt={12} px={10}>
                    <RangeSlider
                      aria-label={["min", "max"]}
                      colorScheme="green"
                      defaultValue={salaryRange}
                      onChange={(value) => setSalaryRange(value)}
                      min={1000}
                      max={15000}
                      step={500}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} pos={"relative"}>
                        <Box
                          pos={"absolute"}
                          border={"1px"}
                          borderColor={"blackAlpha.300"}
                          top="-40px"
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          height={"30px"}
                          minW={"30px"}
                          fontSize={"sm"}
                          rounded={"md"}
                          px={2}
                          color={"blackAlpha.700"}
                          bg={"white"}
                        >
                          {salaryRange[0]}
                        </Box>
                      </RangeSliderThumb>
                      <RangeSliderThumb index={1} pos={"relative"}>
                        <Box
                          pos={"absolute"}
                          border={"1px"}
                          borderColor={"blackAlpha.300"}
                          top="-40px"
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          height={"30px"}
                          minW={"30px"}
                          fontSize={"sm"}
                          rounded={"md"}
                          bg={"white"}
                          px={2}
                          color={"blackAlpha.700"}
                        >
                          {salaryRange[1]}
                        </Box>
                      </RangeSliderThumb>{" "}
                    </RangeSlider>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Job Type
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <RadioGroup defaultValue="2">
                      <Stack spacing={2} direction="column">
                        <Radio colorScheme="green" value="1">
                          Online
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (4075)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          Ofline
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (4)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          Part Time
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (104)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          Full Time
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (84)
                          </Box>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
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
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (245)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="2">
                          About 5 - 10
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (90)
                          </Box>
                        </Radio>
                        <Radio colorScheme="green" value="3">
                          About 10 - 20
                          <Box
                            as="span"
                            color={"gray.600"}
                            fontSize={"13px"}
                            ml={1}
                          >
                            (2004)
                          </Box>
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
                alignItems={"start"}
                gap={4}
              >
                <Stack direction={"column"} w={"full"} spacing={0}>
                  <InputGroup size="md">
                    <Input
                      placeholder="Search here..."
                      focusBorderColor="green.400"
                      pb={1}
                    />
                    <InputRightAddon
                      children="Search"
                      pb={1}
                      cursor={"pointer"}
                    />
                  </InputGroup>

                  <Stack direction={"row"} px={4} spacing={4}>
                    <Text
                      color={"green.500"}
                      cursor={"pointer"}
                      className="font-mirza"
                    >
                      {" "}
                      react
                    </Text>
                    <Text
                      color={"green.500"}
                      cursor={"pointer"}
                      className="font-mirza"
                    >
                      Laravel dev
                    </Text>

                    <Text
                      color={"green.500"}
                      cursor={"pointer"}
                      className="font-mirza"
                    >
                      figma to react
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  colorScheme={"green"}
                  pb={1}
                  display={{
                    base: "none",
                    md: "block",
                  }}
                >
                  <Text px={2}>Advance Search</Text>
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
                    // color={"blackAlpha.700"}
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
                      <Select size={"sm"} focusBorderColor="green.500">
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
                      <Button
                        colorScheme={`${gridCol === 1 ? "green" : "gray"}`}
                        size={"sm"}
                        mr={2}
                        px={2}
                        onClick={() => setGridCol(1)}
                      >
                        {" "}
                        <Icon as={MdOutlineReorder} boxSize={6} />
                      </Button>
                      <Button
                        size={"sm"}
                        px={2}
                        onClick={() => setGridCol(2)}
                        colorScheme={`${gridCol === 2 ? "green" : "gray"}`}
                      >
                        {" "}
                        <Icon as={MdOutlineApps} boxSize={6} />
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Grid
              px={{
                base: "0",
                md: "8",
              }}
              pb={8}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: `repeat(${gridCol}, 1fr)`,
              }}
            >
              <JobCard />
              <JobCard />

              <JobCard />

              <JobCard />
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
