"use client";

import Action from "@/components/home/Action";
import ActionCard from "@/components/home/ActionCard";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import OurStory from "@/components/home/OurStory";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box>
        <Hero />
        <OurStory />
        <Category />
        <ActionCard />
        <Action />
      </Box>
    </>
  );
}
