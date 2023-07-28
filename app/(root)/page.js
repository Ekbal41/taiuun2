"use client";

import Hero from "@/components/home/Hero";
import OurStory from "@/components/home/OurStory";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box>
        <Hero />
        <OurStory />
      </Box>
    </>
  );
}
