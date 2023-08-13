"use client";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import CategoryCard from "../card/CategoryCard";

export default function Category() {
  return (
    <>
      <Box
        maxW={"8xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
        mb={12}
      >
        <Text
          fontSize={"5xl"}
          fontWeight={"400"}
          className="font-mirza"
        >
          Lorem ipsum dolor
        </Text>
        <Text
          fontSize={"xl"}
          fontWeight={600}
          color={"blackAlpha.700"}
        >
          Looking for Jobs?
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={8}
          mt={10}
        >
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
          <GridItem>
            <CategoryCard />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
