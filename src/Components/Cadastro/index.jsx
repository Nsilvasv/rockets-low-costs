import { useState } from 'react';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Ft from '../../assets/rocket.png'

const Cadastro = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !age) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Fazendo uma requisição POST para criar o usuário
      const response = await axios.post('http://localhost:5000/api/users', { name, age });
      
      if (response.data.success) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login'); // Redireciona para a página de login após o cadastro
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="8" p="6" borderRadius="md">
      <img src={Ft} alt="" srcset="" />
      <FormControl id="name" my="6">
        <FormLabel>Nome</FormLabel>
        <Input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Digite seu nome" 
        />
      </FormControl>

      <FormControl id="age" my="6">
        <FormLabel>Idade</FormLabel>
        <Input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Digite sua idade" 
        />
      </FormControl>

      <Button
        style={{ backgroundColor: 'rgba(29, 53, 88, 1)', color: 'white' }}
        width="full"
        onClick={handleSubmit}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default Cadastro;
