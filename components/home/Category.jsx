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
            <CategoryCard
              title={"Web Development"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"UI/UX Design"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Mobile Development"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Data Science"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Digital Marketing"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Content Writing"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Video Editing"}
            />
          </GridItem>
          <GridItem>
            <CategoryCard
              title={"Photography"}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
