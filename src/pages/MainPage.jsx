import React from 'react';
import { Button, Box, Text, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');

  const handleEnterChat = () => {
    navigate('/chat', { state: { name } });
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Chat App!</Text>
        <Input
          placeholder="Enter your chat name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleEnterChat}>
          Enter Chat
        </Button>
      </VStack>
    </Box>
  );
}

export default MainPage;