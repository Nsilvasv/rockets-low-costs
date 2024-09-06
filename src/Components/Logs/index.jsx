import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';

const LogViewer = () => {
  const [logs, setLogs] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/logs');
        setLogs(response.data.logs);
      } catch (error) {
        console.error('Erro ao buscar logs', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <Box>
      <Text>{logs}</Text>
    </Box>
  );
};

export default LogViewer;
