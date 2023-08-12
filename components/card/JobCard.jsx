import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import {
  MdOutlineMyLocation,
  MdOutlinePayments,
  MdShare,
} from "react-icons/md";

export default function JobCard() {
  return (
    <>
      <Stack
        bg="white"
        p={4}
        shadow={"xs"}
        spacing={4}
        _hover={{
          transition: "all 0.2s",
          cursor: "pointer",
          backgroundColor: "green.50",
          "& .heading": {
            color: "green.500",
          },
        }}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {" "}
          <Heading
            size={"md"}
            color={"green.500"}
            fontWeight={"semibold"}
          >
            Need a babysitter for 2 kids
          </Heading>
          <Icon as={MdShare} boxSize={6} color={"green.500"} />
        </Flex>
        <Box>
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
          In some layouts, you may need certain grid items to span specific
          amount of columns or rows instead of an even distribution. To achieve
          this, you need to pass the colSpan prop to the GridItem component to
          span across columns and also pass the rowSpan component to span across
          rows. You also need to specify the templateColumns and templateRows.
        </Box>
        <Flex gap={4}>
          <Flex gap={2} alignItems={"center"}>
            <Icon as={MdOutlinePayments} boxSize={4} color={"green"} />
            <Text>500k</Text>
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Icon
              as={MdOutlineMyLocation}
              boxSize={4}
              color={"green"}
            />
            <Text>Dhaka, Badda</Text>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
