import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import rocketImage from '../../assets/rocket.png'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { userName });
      if (response.data.success) {
        navigate('/confirma-idade', { state: { age: response.data.age } });
      }
    } catch (error) {
      console.error('Erro ao autenticar', error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="8" p="6" borderRadius="md">
      <img src={rocketImage} mb='6' />

      <FormControl id="password" my="6">
        <FormLabel>Login</FormLabel>
        <Input 
          type="password" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Digite seu nome" 
        />
      </FormControl>
      <Button style={{ backgroundColor: 'rgba(29, 53, 88, 1)', color: 'white' }} width="full" onClick={handleLogin}>
        Entrar
      </Button>

        <Text fontSize='xs' mt='2' >Não tem conta?  <Link to='/cadastro'>Cadastre-se aqui</Link> </Text>

    </Box>
  );
};

export default Login;
