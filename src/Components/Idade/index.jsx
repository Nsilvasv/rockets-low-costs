import React, { useLocation, useNavigate } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const ConfirmaIdade = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { idade } = location.state || {};

  return (
    <Box
      maxW="sm"
      mx='auto'
      borderRadius="md"
      boxShadow="lg"
      textAlign="center"
      color="black"
    >
      <Text fontSize="lg" mb="4">
        Sua idade é: {idade}
      </Text>
      <Text fontSize="6xl" fontWeight="bold" mb="4">
        {idade}
      </Text>
      <VStack spacing="4">
        <Button
          style={{ backgroundColor: 'rgba(29, 53, 88, 1)', color: 'white' }}
          size="lg"
          width="100%"
          onClick={() => navigate('/dashboard')}
        >
          Confirmar
        </Button>
        <Button variant="ghost" color="gray.400" onClick={handleCancel}>
          Cancelar
        </Button>
      </VStack>
    </Box>
  );
};

export default ConfirmaIdade;
