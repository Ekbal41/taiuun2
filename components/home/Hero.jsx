"use client";

import { Box } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export default function Hero() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Box bg={"blackAlpha.100"}>
        <Box maxW={"5xl"} mx={"auto"}>
          <Carousel responsive={responsive}>
            <Box p={4} shadow={"md"} bg="whatsapp.300" cursor={"pointer"}>
              dignissimos voluptates nostrum, tempore temporibus deleniti sit
              sapiente incidunt neque unde non tenetur modi assumenda dolorum
              iste atque error illum minus laborum. Dolorem illum repellat
              suscipit nihil quasi eveniet. Eaque provident odio ratione.
              Inventore quo eius molestiae vitae delectus, dicta omnis ab
              accusamus et illum obcaecati asperiores aperiam temporibus, quasi
              eveniet, dolor quibusdam? In dolorum hic fugit! Itaque cupiditate
              iusto quos? Blanditiis asperiores maiores eum aliquid? Molestias
              eum optio doloribus sapiente mollitia quasi saepe atque fuga
              maiores dolores, consectetur tempore nemo quaerat accusantium
              officiis?
            </Box>
            <Box
              p={4}
              shadow={"md"}
              bg="facebook.300"
              cursor={"pointer"}
              userSelect={"none"}
            >
              dignissimos voluptates nostrum, tempore temporibus deleniti sit
              sapiente incidunt neque unde non tenetur modi assumenda dolorum
              iste atque error illum minus laborum. Dolorem illum repellat
              suscipit nihil quasi eveniet. Eaque provident odio ratione.
              Inventore quo eius molestiae vitae delectus, dicta omnis ab
              accusamus et illum obcaecati asperiores aperiam temporibus, quasi
              eveniet, dolor quibusdam? In dolorum hic fugit! Itaque cupiditate
              iusto quos? Blanditiis asperiores maiores eum aliquid? Molestias
              eum optio doloribus sapiente mollitia quasi saepe atque fuga
              maiores dolores, consectetur tempore nemo quaerat accusantium
              officiis?
            </Box>
            <Box
              p={4}
              shadow={"md"}
              bg="whatsapp.300"
              cursor={"pointer"}
              userSelect={"none"}
            >
              dignissimos voluptates nostrum, tempore temporibus deleniti sit
              sapiente incidunt neque unde non tenetur modi assumenda dolorum
              iste atque error illum minus laborum. Dolorem illum repellat
              suscipit nihil quasi eveniet. Eaque provident odio ratione.
              Inventore quo eius molestiae vitae delectus, dicta omnis ab
              accusamus et illum obcaecati asperiores aperiam temporibus, quasi
              eveniet, dolor quibusdam? In dolorum hic fugit! Itaque cupiditate
              iusto quos? Blanditiis asperiores maiores eum aliquid? Molestias
              eum optio doloribus sapiente mollitia quasi saepe atque fuga
              maiores dolores, consectetur tempore nemo quaerat accusantium
              officiis?
            </Box>
            <Box
              p={4}
              shadow={"md"}
              bg="blue.300"
              cursor={"pointer"}
              userSelect={"none"}
            >
              dignissimos voluptates nostrum, tempore temporibus deleniti sit
              sapiente incidunt neque unde non tenetur modi assumenda dolorum
              iste atque error illum minus laborum. Dolorem illum repellat
              suscipit nihil quasi eveniet. Eaque provident odio ratione.
              Inventore quo eius molestiae vitae delectus, dicta omnis ab
              accusamus et illum obcaecati asperiores aperiam temporibus, quasi
              eveniet, dolor quibusdam? In dolorum hic fugit! Itaque cupiditate
              iusto quos? Blanditiis asperiores maiores eum aliquid? Molestias
              eum optio doloribus sapiente mollitia quasi saepe atque fuga
              maiores dolores, consectetur tempore nemo quaerat accusantium
              officiis?
            </Box>
          </Carousel>
        </Box>
      </Box>
    </>
  );
}
