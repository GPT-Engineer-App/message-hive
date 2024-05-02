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
    const newMessage = { id: messages.length + 1, text: message, userName: localStorage.getItem("chatUserName") };
    const currentMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    const updatedMessages = [...currentMessages, newMessage];
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
    setMessage("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex height="100vh" flexDirection="column" justifyContent="space-between">
        <VStack spacing={4} overflowY="auto" p={4} flex="1">
          {messages.map((msg) => {
            const alignSelf = msg.userName === localStorage.getItem("chatUserName") ? "flex-end" : "flex-start";
            return (
              <Box key={msg.id} bg="teal.500" color="white" p={3} borderRadius="lg" alignSelf={alignSelf} maxWidth="80%">
                <Text fontWeight="bold">{msg.userName}</Text>
                <Text>{msg.text}</Text>
              </Box>
            );
          })}
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
