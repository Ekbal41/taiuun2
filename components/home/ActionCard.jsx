import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ActionCard() {
  return (
    <>
      <Box
        maxW={"8xl"}
        px={{
          base: "4",
          md: "10",
        }}
        mx={"auto"}
        my={20}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          alignItems={"center"}
          bg={"gray.50"}
        >
          <Box p={8} backgroundColor={"green.700"} order={{ base: 2, lg: 1 }}>
            <Stack>
              <Text
                fontSize={"5xl"}
                fontWeight={"400"}
                className="font-mirza"
                lineHeight={0.9}
                color={"white"}
              >
                Lorem ipsum dolor
              </Text>
              <Text
                fontSize={"5xl"}
                fontWeight={"400"}
                className="font-mirza"
                lineHeight={0.9}
                color={"green.500"}
              >
                Lorem ipsum dolor sit amet consectetur Quisquam
              </Text>
              <Text
                fontSize={"xl"}
                color={"white"}
              >
                doloremque magni minima expedita sed ut, voluptate a id,
                nostrum, quos non autem sequi odit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Hic commodi cum explicabo
                reiciendis facere architecto atque maiores ut optio quaerat.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam iusto quisquam nisi saepe architecto quae beatae
                deserunt optio? Similique, ea.
              </Text>
              <Button px={8} w={"min-content"} mt={4} color={"green.500"}>
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box
            order={{ base: 1, lg: 2 }}
          >
            <Image
              src="https://th.bing.com/th/id/R.766a986eb830ba26af531a5252c9f5ee?rik=I7xmI5F%2bdK3lEg&pid=ImgRaw&r=0"
              alt="Dan Abramov"
              w={"full"}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
