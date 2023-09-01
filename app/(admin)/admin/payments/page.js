"use client";

import PaymentCard from "@/components/admin/PaymentCard";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

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
          Payments
        </Heading>
        <Flex
          justifyContent={"flex-end"}
          mb={4}
          mt={4}
        >
          <Input
            w={64}
            variant={"filled"}
            focusBorderColor="green.500"
            placeholder="Search"
            size="md"
          />
        </Flex>
        <Box>
          <PaymentCard />
          <PaymentCard />
        </Box>
      </Box>
    </>
  );
}
