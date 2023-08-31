"use client";

import StatusCard from "@/components/admin/StatusCard";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { FaBox, FaBoxOpen } from "react-icons/fa";

export default function Admin() {
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
          Good Morning, <Box
            as="span"
            color={"green.400"}
            fontSize={{
              base: "4xl",
              md: "5xl"
            }}
            fontWeight={"semibold"}
            className="font-mirza"
          >Shagor 👋</Box>
        </Heading>
        <Grid
          gap={4}
          mt={12}
          mb={8}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          <StatusCard to="/admin/opend-jobs"
            title="Opend Jobs"
            value={10}
            icon={FaBoxOpen}

          />
          <StatusCard to="/admin/closed-jobs"
            title="Closed Jobs"
            value={4}
            icon={FaBox}
          />
        </Grid>
      </Box>
    </>
  );
}
