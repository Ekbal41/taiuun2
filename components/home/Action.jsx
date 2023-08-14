import { SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";

export default function Action() {
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
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"gray.50"}
          rounded={"xl"}
          px={8}
          pb={8}
          pt={4}
          direction={{ base: "column", lg: "row" }}
        >
          <Stack order={{ base: 2, lg: 1 }}>
            <Text
              fontSize={"5xl"}
              fontWeight={"400"}
              className="font-mirza"
              lineHeight={0.9}
            >
              We are here to help you
            </Text>
            <Text
              fontSize={"xl"}
              fontWeight={600}
              color={"blackAlpha.700"}
            >
              Be a part of our community &amp; let us help you to reach your
              goals and full potential.
            </Text>
            <Button colorScheme="green" px={8} w={"min-content"} mt={4}>
              Sign Up
            </Button>
          </Stack>
          <Box
            pr={8}
            pt={3}
            order={{ base: 1, lg: 2 }}
            mb={{
              base: 8,
              lg: 0,
            }}
          >
            <Icon as={SunIcon} color={"green.600"} w={20} h={20} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
