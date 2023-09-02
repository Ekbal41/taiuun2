"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import Link from "next/link";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/fire";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Join() {
  const toast = useToast();
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setErrors("");
    const errs = (signUpData) => {
      const errors = {};
      for (const key in signUpData) {
        if (signUpData[key] === "") {
          errors[key] = `${key} is required`;
        }
      }
      return errors;
    };
    if (Object.values(errs(signUpData)).length > 0) {
      setErrors(errs(signUpData));
      return;
    }

    if (signUpData.password !== signUpData.passwordAgain) {
      setErrors({ passwordAgain: "Passwords do not match" });
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password,
      );
      setLoading(false);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      router.push("/signin");
    } catch (error) {
      console.log(error);
      loading(false);
      toast({
        title: "Error",
        description: "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

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

        <Box rounded={"lg"} px={12}
          pb={8}
          pt={6}
          shadow={"xs"}

        >
          <Stack spacing={6}>
            <Heading
              fontSize={"4xl"}
              color={"blackAlpha.800"}
              fontWeight={"500"}
              className="font-mirza"
              textAlign={"center"}
            >
              Join us now{" "}
              <Box as={"span"} color={"green.400"}>
                !
              </Box>
            </Heading>
            <FormControl id="name">
              <Input
                type="text"
                focusBorderColor="green.500"
                placeholder="Name"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, name: e.target.value })}
              />
              <Text
                color="red.500"
                textTransform={"capitalize"}
                fontSize={"sm"}
              >
                {errors?.name}
              </Text>
            </FormControl>
            <FormControl id="email">
              <Input
                type="email"
                focusBorderColor="green.500"
                placeholder="Email"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })}
              />
              <Text
                color="red.500"
                textTransform={"capitalize"}
                fontSize={"sm"}
              >
                {errors?.email}
              </Text>
            </FormControl>
            <FormControl id="password">
              <Input
                type="password"
                focusBorderColor="green.500"
                placeholder="Password"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })}
              />
              <Text
                color="red.500"
                textTransform={"capitalize"}
                fontSize={"sm"}
              >
                {errors?.password}
              </Text>
            </FormControl>
            <FormControl id="password">
              <Input
                type="password"
                focusBorderColor="green.500"
                placeholder="Password Again"
                onChange={(e) =>
                  setSignUpData({
                    ...signUpData,
                    passwordAgain: e.target.value,
                  })}
              />
              <Text
                color="red.500"
                textTransform={"capitalize"}
                fontSize={"sm"}
              >
                {errors?.passwordAgain}
              </Text>
            </FormControl>
            <Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                mt={2}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleSignUp}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
              <Link href="/signin">
                <Text color={"green.400"} textAlign={"center"} mt={2}>
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
