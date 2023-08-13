import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

export default function CategoryCard() {
  return (
    <>
      <Box
        p={4}
        bg={"blackAlpha.50"}
        rounded={"md"}
        minH={"36"}
        cursor={"pointer"}
        shadow={"xs"}
        _hover={{
          shadow: "md",
          bg: "blackAlpha.100",
        }}
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"500"}
        >
          Writing and Translation
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
            <Icon as={StarIcon} color={"yellow.400"} w={6} h={6} />
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
