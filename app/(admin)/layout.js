"use client";
import { Box } from "@chakra-ui/react";
// import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box mx={"auto"} maxW={"container.8xl"}>
        {children}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
