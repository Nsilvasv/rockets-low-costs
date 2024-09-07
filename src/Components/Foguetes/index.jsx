import React from 'react';
import { Box, Button, Image, Text, SimpleGrid } from '@chakra-ui/react';

const rockets = [
  {
    id: 1,
    name: 'Nome do foguete aqui',
    missionName: 'Nome da missão',
    launchYear: 'Ano de lançamento',
    imageUrl: 'https://via.placeholder.com/150', // Coloque a URL real da imagem aqui
  },
  {
    id: 2,
    name: 'Nome do foguete aqui',
    missionName: 'Nome da missão',
    launchYear: 'Ano de lançamento',
    imageUrl: 'https://via.placeholder.com/150', // Coloque a URL real da imagem aqui
  },
  {
    id: 3,
    name: 'Nome do foguete aqui',
    missionName: 'Nome da missão',
    launchYear: 'Ano de lançamento',
    imageUrl: 'https://via.placeholder.com/150', // Coloque a URL real da imagem aqui
  },
  {
    id: 4,
    name: 'Nome do foguete aqui',
    missionName: 'Nome da missão',
    launchYear: 'Ano de lançamento',
    imageUrl: 'https://via.placeholder.com/150', // Coloque a URL real da imagem aqui
  }
];

const RocketCard = ({ rocket }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      maxW="md"
      mx="auto" 
      mt="8"
           
      boxShadow="md"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
    >
      <Image src={rocket.imageUrl} alt={rocket.name} borderRadius="md"  />

      <Box m="4" >
        <Text fontWeight="bold" fontSize="lg" mb="2">{rocket.name}</Text>
        <Text>{rocket.missionName}</Text>
        <Text>{rocket.launchYear}</Text>

        <Button 
          my={4}
          
          width="auto" 
          bg="rgba(29, 53, 88, 1)" 
          color="white" 
          _hover={{ bg: 'rgba(29, 53, 88, 0.8)' }}
        >
          Lançar foguete
        </Button>
      </Box>
    </Box>
  );
};

const RocketList = () => {
  return (
    <Box p={6}>
      <Text fontSize="xl" fontWeight="bold" mb={6}>
        Olá Fulano, selecione o lançamento
      </Text>

      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RocketList;
