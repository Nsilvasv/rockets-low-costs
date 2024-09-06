import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, List, ListItem } from '@chakra-ui/react';

const Dashboard = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');
        setRockets(response.data);
      } catch (error) {
        console.error('Erro ao buscar foguetes', error);
      }
    };
    fetchRockets();
  }, []);

  return (
    <Box>
      <List>
        {rockets.map((rocket) => (
          <ListItem key={rocket.id}>
            <Text>{rocket.rocket_name}</Text>
            <Button onClick={() => alert(`Editar ${rocket.rocket_name}`)}>Editar</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
