import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ActionCard() {
  return (
    <>
      <Box
        maxW={"8xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
        my={20}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          alignItems={"center"}
          bg={"gray.50"}
        >
          <Box
            p={8}
            backgroundColor={"green.700"}
            order={{ base: 2, lg: 1 }}
            borderRadius={{
              base: "0px 0px 10px 10px",
              lg: "10px 0px 0px 10px",
            }}
          >
            <Stack>
              <Text
                fontSize={"5xl"}
                fontWeight={"400"}
                className="font-mirza"
                lineHeight={0.9}
                color={"white"}
              >
                Lorem ipsum dolor
              </Text>
              <Text
                fontSize={"5xl"}
                fontWeight={"400"}
                className="font-mirza"
                lineHeight={0.9}
                color={"green.300"}
              >
                Lorem ipsum dolor sit amet consectetur Quisquam
              </Text>
              <Text
                my={3}
                fontSize={"lg"}
                color={"white"}
              >
                Access the top 10% of talent on Taiuun, and get the job done. We
                have the best teachers and advisors in the market right now.
              </Text>
              <Stack spacing={2}>
                <Flex
                  alignItems={"center"}
                  gap={2}
                >
                  <Icon as={SunIcon} color={"green.300"} boxSize={6} />
                  <Text ml={2} fontSize={"lg"} color={"white"}>
                    Expert Teachers and Advisors
                  </Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  gap={2}
                >
                  <Icon as={SunIcon} color={"green.300"} boxSize={6} />
                  <Text ml={2} fontSize={"lg"} color={"white"}>
                    Unlimited Access to Course Materials
                  </Text>
                </Flex>{" "}
                <Flex
                  alignItems={"center"}
                  gap={2}
                >
                  <Icon as={SunIcon} color={"green.300"} boxSize={6} />
                  <Text fontSize={"lg"} ml={2} color={"white"}>
                    Most Affordable Course Fees in the Market
                  </Text>
                </Flex>
              </Stack>

              <Button
                px={8}
                w={"min-content"}
                mt={4}
                color={"green.500"}
                bg={"white"}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box
            order={{ base: 1, lg: 2 }}
          >
            <Image
              _hover={{
                filter: "brightness(0.8)",
              }}
              transition={"all 0.3s ease"}
              borderRadius={{
                base: "10px 10px 0px 0px",
                lg: "0px 10px 10px 0px",
              }}
              src="https://th.bing.com/th/id/R.766a986eb830ba26af531a5252c9f5ee?rik=I7xmI5F%2bdK3lEg&pid=ImgRaw&r=0"
              alt="Dan Abramov"
              w={"full"}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
