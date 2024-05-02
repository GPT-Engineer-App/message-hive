import { useState } from "react";
import { Box, Button, Container, Flex, Input, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const toast = useToast();

  const sendMessage = () => {
    if (message.trim() === "") {
      toast({
        title: "Cannot send an empty message.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { id: messages.length + 1, text: message }]);
    setMessage("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex height="100vh" flexDirection="column" justifyContent="space-between">
        <VStack spacing={4} overflowY="auto" p={4} flex="1">
          {messages.map((msg) => (
            <Box key={msg.id} bg="teal.500" color="white" p={3} borderRadius="lg" alignSelf="flex-end" maxWidth="80%">
              <Text>{msg.text}</Text>
            </Box>
          ))}
        </VStack>
        <Stack direction="row" mb={4}>
          <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
          <Button colorScheme="teal" onClick={sendMessage}>
            <FaPaperPlane />
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
