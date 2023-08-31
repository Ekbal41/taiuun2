"use client";

import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
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
import { FaBox } from "react-icons/fa";

export default function OpendJobs() {
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
          Opened Jobs
        </Heading>
        <Flex
          justifyContent={"flex-end"}
          mb={4}
          gap={4}
          mt={4}
        >
          <Input
            w={64}
            variant={"filled"}
            focusBorderColor="green.500"
            placeholder="Search"
            size="md"
          />
          <Button colorScheme="blue" mr={4}>
            Open New Job
          </Button>
        </Flex>
        <Box shadow={"xs"} my={8}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Opening Time</Th>
                  <Th>Job Name</Th>
                  <Th>Job Location</Th>
                  <Th>Aplications</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    12:00 PM
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
                  <Td>Dhaka, Bangladesh</Td>

                  <Td>
                    <Link href="#">
                      <Tooltip
                        label="Total 13 alications with 1 being new"
                        placement="top"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <Box
                          as="span"
                          color={"green.500"}
                          fontWeight={"semibold"}
                        >
                          12 <Badge ms={1} colorScheme="red">+1</Badge>
                        </Box>
                      </Tooltip>
                    </Link>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Close this job"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"purple.500"}>
                        <Icon as={FaBox} />
                      </IconButton>
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    12:00 PM
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
                        Need babysitter a cute toddler
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Dhaka, Bangladesh</Td>

                  <Td>
                    <Link href="#">
                      <Tooltip
                        label="Total 13 alications with 1 being new"
                        placement="top"
                        hasArrow
                        bg={"green.500"}
                        color={"white"}
                        px={3}
                        py={2}
                      >
                        <Box
                          as="span"
                          color={"green.500"}
                          fontWeight={"semibold"}
                        >
                          2 <Badge ms={1} colorScheme="red">+3</Badge>
                        </Box>
                      </Tooltip>
                    </Link>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Close this job"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"purple.500"}>
                        <Icon as={FaBox} />
                      </IconButton>
                    </Tooltip>
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
