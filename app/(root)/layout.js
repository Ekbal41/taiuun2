"use client";
import "../globals.css";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/shared/Footer";
import RootNavbar from "@/components/shared/RootNavBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <RootNavbar />{" "}
      <Box mx={"auto"} maxW={"container.8xl"} bg={"gray.50"} >
        {children}
      </Box>
      <Footer />
    </>
  );
}
