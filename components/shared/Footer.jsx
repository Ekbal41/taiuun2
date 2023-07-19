"use client";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      borderTop={"1px"}
      borderColor={"gray.200"}
    >
      <Flex
        justifyContent={"space-between"}
        py={"18px"}
        maxW={"8xl"}
        mx={"auto"}
        px={10}
      >
        <Flex alignItems={"center"} gap={"6"} fontSize={"lg"}>
          <Text>
            Dashboard
          </Text>
        </Flex>
        <Flex
          alignItems={"center"}
        >
          <Button
            bg={"white"}
            color={"gray.600"}
            _hover={{
              bg: "gray.50",
            }}
          >
            <Icon as={QuestionOutlineIcon} fontSize={20} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
