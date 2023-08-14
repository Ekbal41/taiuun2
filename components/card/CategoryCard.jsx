import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

export default function CategoryCard({ title }) {
  return (
    <>
      <Box
        p={4}
        bg={"gray.50"}
        rounded={"md"}
        minH={"36"}
        cursor={"pointer"}
        shadow={"xs"}
        transition={"all .3s ease"}
        _hover={{
          bg: "gray.100",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"500"}
        >
          {title}
        </Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={8}
          mt={4}
        >
          <Flex
            alignItems={"center"}
            gap={2}
          >
            <Icon as={StarIcon} color={"green.600"} w={5} h={5} />
            <Text
              fontSize={"xl"}
              color={"blackAlpha.700"}
            >
              4.45/5
            </Text>
          </Flex>
          <Text
            color={"blackAlpha.700"}
            fontSize={"xl"}
          >
            40 Jobs
          </Text>
        </Flex>
      </Box>
    </>
  );
}
