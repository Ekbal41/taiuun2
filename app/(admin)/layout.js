"use client";
import { Box } from "@chakra-ui/react";
// import Footer from "@/components/shared/Footer";
import AdminNavbar from "@/components/shared/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <Box mx={"auto"} maxW={"container.8xl"}>
        {children}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
