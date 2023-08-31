"use client";
import "../globals.css";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/shared/Footer";
import DashBoardNavbar from "@/components/shared/DashBoardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashBoardNavbar />
      <Box mx={"auto"} maxW={"container.8xl"} >
        {children}
      </Box>
      <Footer />
    </>
  );
}
