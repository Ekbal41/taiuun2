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
  Select,
  Text,
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
import { MdDoDisturbAlt, MdOutlineCreditCard, MdStar } from "react-icons/md";

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
        <Link href="#">
          <Text
            as="h1"
            fontSize={"4xl"}
            color={"gray.800"}
            fontWeight={"light"}
            className="font-mirza"
            _hover={{
              color: "blue.500",
              textDecoration: "underline",
            }}
            textTransform={"capitalize"}
          >
            <Badge me={1} colorScheme="purple" py={1} px={2}>23453</Badge>
            Need babysitter a cute toddler
            <Icon as={ExternalLinkIcon} />
          </Text>
        </Link>

        <Box shadow={"xs"} my={8}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Applicant Name</Th>
                  <Th>From</Th>
                  <Th>Phone</Th>
                  <Th>Status</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    23 Jan 2021{" "}
                    <Badge me={1} colorScheme="blue" ms={1}>New</Badge>
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
                        Abdur Rahman
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Pikabon Papyam</Td>

                  <Td>
                    01798374657
                  </Td>
                  <Td>
                    <Select
                      placeholder="Select Status"
                      size={"sm"}
                      width={"fit-content"}
                      focusBorderColor="green.500"
                    >
                      <option value="option1">Interviewing</option>
                      <option value="option2">Waiting</option>
                      <option value="option3">Ignored</option>
                    </Select>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Approve this aplication"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"gray.400"} me={2}>
                        <Icon as={MdStar} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      label="Reject this aplication"
                      placement="start"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"red.500"}>
                        <Icon as={MdDoDisturbAlt} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    23 Jan 2021<Badge me={1} colorScheme="red" ms={1}>
                      Intervewing
                    </Badge>
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
                        Ataul Gani
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Taiuun International</Td>

                  <Td>
                    01798374657
                  </Td>
                  <Td>
                    <Select
                      placeholder="Select Status"
                      size={"sm"}
                      width={"fit-content"}
                      focusBorderColor="green.500"
                    >
                      <option value="option1">Interviewing</option>
                      <option value="option2">Waiting</option>
                      <option value="option3">Ignored</option>
                    </Select>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Approve this aplication"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"gray.400"} me={2}>
                        <Icon as={MdStar} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      label="Reject this aplication"
                      placement="start"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"red.500"}>
                        <Icon as={MdDoDisturbAlt} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    23 Jan 2021<Badge me={1} colorScheme="yellow" ms={1}>
                      Waiting
                    </Badge>
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
                        Imdadul Huda
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Facebook</Td>

                  <Td>
                    01798374657
                  </Td>
                  <Td>
                    <Select
                      placeholder="Select Status"
                      size={"sm"}
                      width={"fit-content"}
                      focusBorderColor="green.500"
                    >
                      <option value="option1">Interviewing</option>
                      <option value="option2">Waiting</option>
                      <option value="option3">Ignored</option>
                    </Select>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Approve this aplication"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"gray.400"} me={2}>
                        <Icon as={MdStar} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      label="Reject this aplication"
                      placement="start"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"red.500"}>
                        <Icon as={MdDoDisturbAlt} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    23 Jan 2021<Badge me={1} colorScheme="green" ms={1}>
                      Approved
                    </Badge>
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
                        Rohan Sarkar
                        <Icon as={ExternalLinkIcon} />
                      </Box>
                    </Link>
                  </Td>
                  <Td>Facebook</Td>

                  <Td>
                    01798374657
                  </Td>
                  <Td>
                    <Select
                      placeholder="Select Status"
                      size={"sm"}
                      width={"fit-content"}
                      focusBorderColor="green.500"
                    >
                      <option value="option1">Interviewing</option>
                      <option value="option2">Waiting</option>
                      <option value="option3">Ignored</option>
                    </Select>
                  </Td>

                  <Td
                    isNumeric
                  >
                    <Tooltip
                      label="Approve this aplication"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"green.500"} me={2}>
                        <Icon as={MdStar} fontSize={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      label="Payment Details"
                      placement="top"
                      hasArrow
                      bg={"green.500"}
                      color={"white"}
                      px={3}
                      py={2}
                    >
                      <IconButton size="sm" color={"green.500"}>
                        <Icon as={MdOutlineCreditCard} fontSize={20} />
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
