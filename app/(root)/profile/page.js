"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  Tooltip,
  border,
} from "@chakra-ui/react";
import { MdEdit, MdOutlineMyLocation } from "react-icons/md";

export default function Profile() {
  return (
    <>
      <Box
        maxW={"6xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
        my={12}
      >
        <Box shadow="xs">
          <Flex
            gap={4}
            justifyContent={"space-between"}
            alignItems={{
              base: "flex-start",
              md: "center",
            }}
            p={8}
            borderBottom={"1px"}
            borderColor={"gray.100"}
            direction={{ base: "column", md: "row" }}
          >
            <Flex gap={4} alignItems={"center"}>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
              <Stack>
                <Heading
                  size={"lg"}
                  fontWeight={"semibold"}
                  color={"blackAlpha.800"}
                  mt={2}
                  my={0}
                >
                  Ryan Florence
                </Heading>
                <Flex gap={2} alignItems={"center"}>
                  <Icon as={MdOutlineMyLocation} boxSize={4} />
                  <Text>New York City, NY</Text>
                </Flex>
                <Stack
                  direction={"row"}
                  spacing={4}
                  mt={0}
                  alignItems={"center"}
                >
                  <Button
                    size={"xs"}
                    rounded={"full"}
                    w={"fit-content"}
                    color={"blackAlpha.600"}
                    variant={"outline"}
                  >
                    <Box as="span" mb={1} mr={1} fontSize={20}>
                      {" "}
                      ●{" "}
                    </Box>
                    Available Now
                  </Button>{" "}
                  <Tooltip label="Edit">
                    <Flex
                      width={"fit-content"}
                      w={7}
                      h={7}
                      rounded={"full"}
                      justifyContent={"center"}
                      border={"1px"}
                      borderColor={"gray.300"}
                      cursor={"pointer"}
                      alignItems={"center"}
                    >
                      <Icon as={MdEdit} boxSize={5} color={"green.500"} />
                    </Flex>
                  </Tooltip>
                </Stack>
              </Stack>
            </Flex>
            <Flex
              gap={4}
              mt={{
                base: "4",
                md: "0",
              }}
            >
              <Button colorScheme="green" rounded={"full"} variant="outline">
                See Public View
              </Button>
              <Button colorScheme="green" rounded={"full"}>
                Profile Setting
              </Button>
            </Flex>
          </Flex>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
          >
            <GridItem colSpan={{ base: 1, md: 4 }} p={8}>
              ফ্রিল্যান্সিং করার উদ্দেশ্যে প্রায় দেড় বছর আগে আমি Fiver Account
              তৈরী করি। কিন্তু কোন কাজ করা হয়নি। যদিও Draft Mood এ ৫টি গিগ তৈরী
              করা ছিল। এখন কাজ শুরু করবো ভেবে গিগগুলোতে কিছুটা সংযোজন-বিয়োজন
              করার জন্য Click করি। দেখি শুধু প্রথম পৃষ্টায় লেখা যায় কিন্তু কোন
              পরিবর্তন করা যায়না। কারন, Save and Continue এবং Create New Gig
              বাটনগুলো কালো করে দেয়া হয়েছে। এখন আমার জানার বিষয় হচ্ছে- এ
              একাউন্ট দিয়ে কাজ করতে পারবো কিনা? অভিজ্ঞদের পরামর্শ আশা করছি।
              ধন্যবাদ
            </GridItem>
            <GridItem
              colSpan={{ base: 1, md: 8 }}
              p={8}
              borderLeft={"1px"}
              borderTop={{
                base: "1px",
                md: "none",
              }}
              borderColor={"gray.100"}
            >
              ফ্রিল্যান্সিং করার উদ্দেশ্যে প্রায় দেড় বছর আগে আমি Fiver Account
              তৈরী করি। কিন্তু কোন কাজ করা হয়নি। যদিও Draft Mood এ ৫টি গিগ তৈরী
              করা ছিল। এখন কাজ শুরু করবো ভেবে গিগগুলোতে কিছুটা সংযোজন-বিয়োজন
              করার জন্য Click করি। দেখি শুধু প্রথম পৃষ্টায় লেখা যায় কিন্তু কোন
              পরিবর্তন করা যায়না। কারন, Save and Continue এবং Create New Gig
              বাটনগুলো কালো করে দেয়া হয়েছে। এখন আমার জানার বিষয় হচ্ছে- এ
              একাউন্ট দিয়ে কাজ করতে পারবো কিনা? অভিজ্ঞদের পরামর্শ আশা করছি।
              ধন্যবাদ
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
