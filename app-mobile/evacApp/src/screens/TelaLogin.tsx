import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { useAuth } from '../context/AuthContext'; 

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type TelaLoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>; 

interface Props {
  navigation: TelaLoginNavigationProp; 
}

const TelaLogin = ({ navigation }: Props) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    const loginSuccess = login(email, senha);

    if (loginSuccess) {
      navigation.navigate('Home'); 
    } else {
      setErro('Falha ao fazer login. Tente novamente!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        secureTextEntry
        onChangeText={setSenha}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      {erro && <Text style={styles.error}>{erro}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#4A90E2',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  error: {
    color: '#FF4C4C',
    fontSize: 14,
    marginTop: 10,
  },
});

export default TelaLogin;
