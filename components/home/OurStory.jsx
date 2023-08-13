"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { MdOutlinePayments } from "react-icons/md";

export default function OurStory() {
  return (
    <>
      <Box
        maxW={"8xl"}
        px={{
          base: "8",
          md: "20",
        }}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          py={"28"}
          gap={12}
        >
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              p={4}
              bg={"green.100"}
              w={"full"}
              h={"96"}
              rounded={"md"}
            >
            </Box>
          </GridItem>
          <GridItem>
            <Heading
              as={"h2"}
              fontSize={"4xl"}
              fontWeight={"500"}
              style={{
                fontFamily: "cursive",
              }}
            >
              Lorem ipsum dolor sit amet
            </Heading>
            <Stack mt={8} spacing={4}>
              <Flex
                justifyContent={"start"}
                gap={2}
              >
                <Icon
                  as={MdOutlinePayments}
                  boxSize={8}
                  color={"green.500"}
                />
                <Stack spacing={0}>
                  <Text fontWeight={"semibold"} fontSize={"xl"}>
                    Join For Free
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray.700"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. lorem
                  </Text>
                </Stack>
              </Flex>
              <Flex
                justifyContent={"start"}
                gap={2}
              >
                <Icon
                  as={MdOutlinePayments}
                  boxSize={8}
                  color={"green.500"}
                />
                <Stack spacing={0}>
                  <Text fontWeight={"semibold"} fontSize={"xl"}>
                    Post A Job
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray.700"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. lorem
                  </Text>
                </Stack>
              </Flex>
              <Flex
                justifyContent={"start"}
                gap={2}
              >
                <Icon
                  as={MdOutlinePayments}
                  boxSize={8}
                  color={"green.500"}
                />
                <Stack spacing={0}>
                  <Text fontWeight={"semibold"} fontSize={"xl"}>
                    Hire Best Talent
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"gray.700"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. lorem
                  </Text>
                </Stack>
              </Flex>
              <Flex
                gap={4}
                mt={4}
              >
                <Button
                  colorScheme={"green"}
                >
                  Sign up for free
                </Button>
                <Button
                  colorScheme={"green"}
                >
                  Learn how to hire
                </Button>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
