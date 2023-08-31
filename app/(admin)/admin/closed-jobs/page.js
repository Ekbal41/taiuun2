"use client";

import { CloseIcon, DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBoxOpen, FaTrashAlt } from "react-icons/fa";

export default function ClosedJobs() {
  return (
    <>
      <Box
        maxW={"8xl"}
        mx={"auto"}
        px={{
          base: "4",
          md: "10",
        }}
        py={8}
      >
        <Heading
          as="h1"
          size="2xl"
          color={"gray.800"}
          fontWeight={"light"}
          className="font-mirza"
        >
          Closed Jobs <Badge colorScheme="red" p={1}>Unpaid</Badge>
        </Heading>
        <Flex
          justifyContent={"flex-end"}
          mb={4}
          mt={4}
        >
          <Input
            w={64}
            variant={"filled"}
            focusBorderColor="green.500"
            placeholder="Search"
            size="md"
          />
        </Flex>
        <Box shadow={"xs"} my={8}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Confirmed Date</Th>
                  <Th>Job Name</Th>
                  <Th>Confirmed To</Th>
                  <Th>Job Location</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    3 Jan 2021
                  </Td>

                  <Td>
                    <Link href="#">
                      <Box
                        _hover={{
                          color: "blue.500",
                          textDecoration: "underline",
                        }}
                        textTransform={"capitalize"}
                      >
                        <Badge me={1} colorScheme="purple">23453</Badge>
                        Marketing Manager
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>

                  <Td>
                    <Link href="#">
                      <Box
                        _hover={{
                          color: "blue.500",
                          textDecoration: "underline",
                        }}
                        textTransform={"capitalize"}
                      >
                        <Badge me={1} colorScheme="purple">23453</Badge>
                        Enayet Rahman
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Dhaka, Bangladesh</Td>

                  <Td
                    isNumeric
                  >
                    <Flex direction="row" gap={4} justifyContent={"flex-end"}>
                      <Tooltip
                        label="Reopen this job"
                        placement="top"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <IconButton size="sm" color={"purple.500"}>
                          <Icon as={FaBoxOpen} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        label="Delete this job : Not reversible!"
                        placement="start"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <IconButton size="sm" color={"red.500"}>
                          <Icon as={FaTrashAlt} />
                        </IconButton>
                      </Tooltip>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    3 Jan 2021
                  </Td>

                  <Td>
                    <Link href="#">
                      <Box
                        _hover={{
                          color: "blue.500",
                          textDecoration: "underline",
                        }}
                        textTransform={"capitalize"}
                      >
                        <Badge me={1} colorScheme="purple">23453</Badge>
                        Marketing Manager
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>

                  <Td>
                    <Link href="#">
                      <Box
                        _hover={{
                          color: "blue.500",
                          textDecoration: "underline",
                        }}
                        textTransform={"capitalize"}
                      >
                        <Badge me={1} colorScheme="purple">23453</Badge>
                        Enayet Rahman
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Dhaka, Bangladesh</Td>

                  <Td
                    isNumeric
                  >
                    <Flex direction="row" gap={4} justifyContent={"flex-end"}>
                      <Tooltip
                        label="Reopen this job"
                        placement="top"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <IconButton size="sm" color={"purple.500"}>
                          <Icon as={FaBoxOpen} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        label="Delete this job : Not reversible!"
                        placement="start"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <IconButton size="sm" color={"red.500"}>
                          <Icon as={FaTrashAlt} />
                        </IconButton>
                      </Tooltip>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
