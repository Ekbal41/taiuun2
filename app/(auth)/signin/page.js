"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../../../firebase/fire";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const router = useRouter();
  const toast = useToast();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    const { email, password } = signInData;
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
    if (Object.values(errs(signInData)).length > 0) {
      setErrors(errs(signInData));
      console.log(errors);
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast({
        title: "Success.",
        description: "You are now signed in.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      router.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);

      const errMessage = (err) => {
        if (err.code === "auth/user-not-found") {
          return "User not found";
        }
        if (err.code === "auth/wrong-password") {
          return "Invalid password";
        }
        return "Something went wrong";
      };

      toast({
        title: "Error",
        description: errMessage(err),
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
          pt={4} pb={12}
         shadow={"xs"}
        >

          <Stack spacing={6}>
            <Text
              fontSize={"4xl"}
              color={"blackAlpha.800"}
              fontWeight={"500"}
              className="font-mirza"
              textAlign={"center"}
              mb={1}
            >
              Sign In to Taiuun
            </Text>
            <FormControl id="email">
              <Input
                type="email"
                focusBorderColor="green.500"
                placeholder="Your Email"
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })}
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
                placeholder="Your Password"
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })}
              />
              <Text
                color="red.500"
                textTransform={"capitalize"}
                fontSize={"sm"}
              >
                {errors?.password}
              </Text>
            </FormControl>
            <Stack spacing={4}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"end"}
              >
                <Text color={"green.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleSignIn}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
