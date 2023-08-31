import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function StatusCard({ to, title, value, icon }) {
  return (
    <>
      <Link href={to}>
        <Flex
          p={4}
          rounded={"md"}
          shadow={"md"}
          alignItems={"start"}
          transition={"all .3s ease"}
          borderTop={"4px solid"}
          borderTopColor={"green.500"}
          gap={4}
          _hover={{
            bg: "green.50",
          }}
        >
          <Icon as={icon} w={10} h={10} color={"green.500"} mt={2} />
          <Box>
            {" "}
            <Text fontSize={"2xl"}>{title}</Text>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"blackAlpha.600"}>
              {value}
            </Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
}
