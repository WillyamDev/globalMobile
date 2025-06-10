import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TelaRotas = ({ navigation }: { navigation: any }) => {
  const [localizacao, setLocalizacao] = useState('');
  const [coordenadas, setCoordenadas] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  
  const apiUrl = 'https://localhost:7055/api/rotas-seguras';  

  const handleCriarRota = async () => {
    try {
      const response = await axios.post(apiUrl, {
        localizacao,      
        coordenadas,      
      });
      
      setSucesso('Rota criada com sucesso!');
      setErro(''); 
      console.log('Resposta da API:', response.data);
    } catch (error: any) {
      setSucesso('');
      setErro('Erro ao criar a rota. Tente novamente!');
      
      if (error.response) {
        console.error('Erro ao acessar a API:', error.response.data);
      } else if (error.request) {
        console.error('Erro na requisição, sem resposta:', error.request);
      } else {
        console.error('Erro ao configurar a requisição:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criar Rota Segura</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a localização"
        value={localizacao}
        onChangeText={setLocalizacao}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite as coordenadas (ex: 12.345678, 98.765432)"
        value={coordenadas}
        onChangeText={setCoordenadas}
      />

      <Button title="Criar Rota" onPress={handleCriarRota} />

      {sucesso ? <Text style={styles.success}>{sucesso}</Text> : null}
      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <Button
        title="Voltar para a Home"
        onPress={() => navigation.navigate('Home')}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  success: {
    color: '#4CAF50',
    marginTop: 20,
    fontSize: 16,
  },
  error: {
    color: '#FF4C4C',
    marginTop: 20,
    fontSize: 16,
  },
});

export default TelaRotas;
