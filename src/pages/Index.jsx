import React from "react";
import { Box, Center, Heading, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box minH="100vh" bg={bgColor} color={textColor}>
      <Center py={20}>
        <VStack spacing={4} align="center">
          <FaExclamationTriangle size="5em" />
          <Heading as="h1">503 Service Unavailable</Heading>
          <Text fontSize="xl" textAlign="center">
            Oops! It looks like Verbatim's servers are currently overloaded or undergoing maintenance. We're working hard to get things back to normal. Please try again later.
          </Text>
          <Button colorScheme="blue" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Index;
