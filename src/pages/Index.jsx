import React from "react";
import { Box, Center, Heading, Text, Button, VStack, HStack, useColorModeValue, Image, Link } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

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
          <Image src="/images/server-down.png" alt="Server Down Illustration" boxSize="150px" mb={6} />
          <Button colorScheme="blue" onClick={handleReload}>
            Retry
          </Button>
          <Text fontSize="md" textAlign="center" maxWidth="container.sm">
            We are currently experiencing technical issues and our team is working on a fix. For real-time updates, follow us on our social media channels.
          </Text>
          <HStack spacing={4}>
            <Link href="https://twitter.com/verbatim" isExternal>
              <FaTwitter size="1.5em" />
            </Link>
            <Link href="https://facebook.com/verbatim" isExternal>
              <FaFacebook size="1.5em" />
            </Link>
            <Link href="https://instagram.com/verbatim" isExternal>
              <FaInstagram size="1.5em" />
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );

  function handleReload() {
    window.location.reload();
  }
};

export default Index;
