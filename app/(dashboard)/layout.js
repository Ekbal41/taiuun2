"use client";
import "../globals.css";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box mx={"auto"} maxW={"container.8xl"} >
        {children}
      </Box>
      <Footer />
    </>
  );
}
