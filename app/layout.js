"use client";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Providers>
          <Navbar />
          <Box mx={"auto"} maxW={"container.8xl"} bg={"gray.50"}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
