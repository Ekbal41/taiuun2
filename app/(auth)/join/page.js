"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Join() {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        spacing={8}
        mx={"auto"}
        minW={{
          base: "sm",
          md: "md",
        }}
        py={12}
      >
        <Stack align={"center"}>
          <Heading
            fontSize={"4xl"}
            color={"blackAlpha.800"}
            fontWeight={"500"}
            className="font-mirza"
          >
            Join us now{" "}
            <Box as={"span"} color={"green.400"}>
              !
            </Box>
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"xs"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Full Name</FormLabel>
              <Input type="email" focusBorderColor="green.500" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" focusBorderColor="green.500" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" focusBorderColor="green.500" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password Again</FormLabel>
              <Input type="password" focusBorderColor="green.500" />
            </FormControl>
            <Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                mt={2}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign in
              </Button>
              <Link href="/signin">
                <Text color={"green.400"} textAlign={"center"}>
                  Already have an account?
                </Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
