import React, { useEffect, useState } from 'react';
import './App.css';
import api from './Services/Api.js';
import { TextField, Button } from '@mui/material';


function App() {

  //Crianção dos estados que vou usar na aplicação
  const [data, setData] = useState({ users: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [isValidUser, setIsValidUser] = useState('');


  //Aqui faço a chamada da Api que criei
  useEffect(() => {
    api.get('/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  //Aqui faço a pesquisa pra saber se o cpf do usuario se encontra no data
  const searchUser = () => {
    const foundUser = data.users.find(user => user.cpf === searchTerm);

    if (foundUser) {
      setIsValidUser(true);
    } else {
      setIsValidUser(false);
    }
    setSearchTerm('')
  };

  console.log('miii', data.users[0]);

  //Aqui faço a exibição dos dados
  //Acidionei alguns componetes do material UI
  return (
    <>
    <div className='App-header'>
      <h1>Pesquise um CPF Válido:</h1>
      <div>
        {/* <label>Pesquisar cpf: </label> */}
        <TextField
          id='standard-basic'
          size='small'
          label="Insira o CPF"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant='outlined' onClick={searchUser}>Pesquisar</Button>
      </div>
      <div>
      {isValidUser ? (
        <h1>Usuário válido</h1>
      ) : (
        <h1>Usuário inválido</h1>
      )}
      </div>
      </div>
      
    </>
  );
}

export default App;
