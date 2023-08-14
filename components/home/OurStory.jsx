"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  MdOutlineArticle,
  MdOutlineBusinessCenter,
  MdOutlinePayments,
} from "react-icons/md";

export default function OurStory() {
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
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          pt={"20"}
          pb={10}
          gap={12}
        >
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              boxSize={{
                base: "xs",
                md: "lg",
              }}
              pt={10}
            >
              <Image
                src="https://th.bing.com/th/id/R.766a986eb830ba26af531a5252c9f5ee?rik=I7xmI5F%2bdK3lEg&pid=ImgRaw&r=0"
                alt="Dan Abramov"
                rounded={"lg"}
                shadow={"2xl"}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Text
              fontSize={"5xl"}
              fontWeight={"400"}
              className="font-mirza"
            >
              Get started with us
            </Text>
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
                    Post your job on the world's work marketplace and wait for
                    the proposals to flood in from talented people around the
                    world.
                  </Text>
                </Stack>
              </Flex>
              <Flex
                justifyContent={"start"}
                gap={2}
              >
                <Icon
                  as={MdOutlineArticle}
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
                    Begain your journey by posting a job. We will help you to
                    get the best talent.
                  </Text>
                </Stack>
              </Flex>
              <Flex
                justifyContent={"start"}
                gap={2}
              >
                <Icon
                  as={MdOutlineBusinessCenter}
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
                    Get your job done with the best talent in the market. We
                    have the best teachers and advisors in the market right now.
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
                  variant={"outline"}
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
