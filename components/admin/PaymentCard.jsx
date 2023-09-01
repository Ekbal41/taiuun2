import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Input,
  TableCaption,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export default function PaymentCard({ payment }) {
  return (
    <>
      <Box mb={8}>
        <Flex
          gap={{
            base: 0,
            md: 4,
          }}
          fontSize={20}
          fontWeight={"semibold"}
          justifyContent={"start"}
          alignItems={{
            base: "start",
            md: "center",
          }}
          shadow={"xs"}
          p={4}
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <Link href="#">
              <Box
                _hover={{
                  color: "blue.500",
                  textDecoration: "underline",
                }}
                textTransform={"capitalize"}
              >
                <Badge me={1} colorScheme="purple">23453</Badge>
                Need Teacher for my son
                <Icon as={ExternalLinkIcon} />
              </Box>
            </Link>
          </Box>
          <Icon
            as={MdArrowRightAlt}
            display={{
              base: "none",
              md: "block",
            }}
          />
          <Box>
            <Link href="#">
              <Box
                _hover={{
                  color: "blue.500",
                  textDecoration: "underline",
                }}
                textTransform={"capitalize"}
              >
                <Badge me={1} colorScheme="purple">23453</Badge>
                Rayhan Kabir
                <Icon as={ExternalLinkIcon} />
              </Box>
            </Link>
          </Box>
        </Flex>
        <Box
          mx={"-1px"}
        >
          <Flex
            borderRight={"1px solid "}
            borderLeft={"1px solid "}
            borderColor={"blackAlpha.200"}
            gap={3}
            justifyContent={"space-between"}
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Flex
              gap={3}
              alignItems={"center"}
              justifyContent={{
                base: "space-between",
                md: "start",
              }}
            >
              <Box>
                <Text fontWeight={"semibold"}>
                  Expected Payment <Badge colorScheme="green">৳ 3000</Badge>
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"}>
                  Total Due <Badge colorScheme="red">৳ 3000</Badge>
                </Text>
              </Box>
            </Flex>

            <Flex
              gap={3}
            >
              <Input
                placeholder="Received By"
                size={"sm"}
                focusBorderColor="green.500"
                width={"fit-content"}
              />
              <Input
                placeholder="Amount"
                size={"sm"}
                focusBorderColor="green.500"
                width={"fit-content"}
              />
              <Button colorScheme="green" size={"sm"} width={"fit-content"}>
                Add
              </Button>
            </Flex>
          </Flex>
          <Box>
            <TableContainer
              border={"1px solid "}
              borderColor={"blackAlpha.200"}
            >
              <Table colorScheme="blackAlpha">
                <TableCaption
                  m={0}
                  className=""
                  style={{
                    textAlign: "end",
                  }}
                >
                  Total Paid : 6000 BDT
                </TableCaption>

                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>
                      Received By
                    </Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>20 Jan 3023</Td>
                    <Td>Ataul Rahman</Td>
                    <Td isNumeric>3400</Td>
                  </Tr>
                  <Tr>
                    <Td>20 Jan 3023</Td>
                    <Td>Ataul Pamniar</Td>
                    <Td isNumeric>3400</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
