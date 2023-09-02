"use client";

import PaymentCard from "@/components/admin/PaymentCard";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function ClosedJobs() {
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
        <Heading
          as="h1"
          size="2xl"
          color={"gray.800"}
          fontWeight={"light"}
          className="font-mirza"
        >
          Open A Job
        </Heading>

        <Grid
          shadow="xs"
          my={8}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <Box
            borderRight={"1px solid"}
            borderColor={"blackAlpha.200"}
            p={4}
          >
            <Stack
              spacing={4}
            >
              <Heading
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                Job Details
              </Heading>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Job Title{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Write a meaningful job title that describes the job. Avoid
                    using internal job titles and abbreviations.
                  </Text>
                </Box>
                <Input
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="Job Title"
                  mt={2}
                />
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Location{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Let us know where the job is located. This will help us to
                    show your job to the right candidates.
                  </Text>
                </Box>
                <Input
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="Location"
                  mt={2}
                />
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Experience Level{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Select the experience level of the job. So we can show your
                    job to the right candidates.
                  </Text>
                </Box>
                <Select
                  placeholder="Select option"
                  focusBorderColor="green.500"
                  mt={2}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Gender{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Select your prefered candiadte gender
                  </Text>
                </Box>
                <Select
                  placeholder="Select option"
                  focusBorderColor="green.500"
                  mt={2}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Joining Date{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    When do you want the candidate to join?
                  </Text>
                </Box>
                <Input
                  type="date"
                  focusBorderColor="green.500"
                  placeholder="Job Title"
                  mt={2}
                />
              </Grid>{" "}
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Office Time{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Office time for the job
                  </Text>
                </Box>
                <Input
                  type="time"
                  focusBorderColor="green.500"
                  placeholder="Job Title"
                  mt={2}
                />
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Job Type{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Select the type of job, so we can show your job to the right
                    candidates.
                  </Text>
                </Box>
                <Select
                  placeholder="Select option"
                  focusBorderColor="green.500"
                  mt={2}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Grid>
            </Stack>
          </Box>
          <Box p={4}>
            <Stack>
              <Heading
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                Employer Details
              </Heading>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Name{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Write down employer name
                  </Text>
                </Box>
                <Input
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="Job Title"
                  mt={2}
                />
              </Grid>

              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Gender{" "}
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    lorem ipsum dolor sit amet
                  </Text>
                </Box>
                <Select
                  placeholder="Select option"
                  focusBorderColor="green.500"
                  mt={2}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Company
                    <Box
                      as="span"
                      color="red.500"
                      fontSize="xs"
                    >
                      (Required)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Employing company name
                  </Text>
                </Box>
                <Input
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="Name of the company"
                  mt={2}
                />
              </Grid>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                gap={4}
              >
                <Box>
                  <Text textAlign="end" fontWeight={"semibold"}>
                    Requirements{" "}
                    <Box
                      as="span"
                      color="green.500"
                      fontSize="xs"
                    >
                      (Optional)
                    </Box>
                  </Text>
                  <Text textAlign="end" fontSize="sm" color="blackAlpha.700">
                    Write down employer requirements
                  </Text>
                </Box>
                <Textarea
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="Write your requirements here"
                  mt={2}
                />
              </Grid>
            </Stack>
            <Stack>
              <Heading
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                Skills
              </Heading>
              <Textarea
                type="text"
                focusBorderColor="green.500"
                placeholder="Write down skills required for the job. Separate each skill with a comma (,)"
                mt={2}
              />
            </Stack>

            <Flex justifyContent="flex-end" mt={8}>
              <Button colorScheme="green">Open This Job</Button>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
