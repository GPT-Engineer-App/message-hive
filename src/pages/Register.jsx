import { useState } from 'react';
import { Box, Button, Container, Input, useToast } from '@chakra-ui/react';

const Register = () => {
  const [name, setName] = useState('');
  const toast = useToast();

  const handleRegister = () => {
    if (name.trim() === '') {
      toast({
        title: 'Name cannot be empty.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    localStorage.setItem('chatUserName', name);
    toast({
      title: 'Registration successful',
      description: 'You can now send messages.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent p={4}>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Button mt={4} colorScheme="teal" onClick={handleRegister}>Register</Button>
      </Box>
    </Container>
  );
};

export default Register;