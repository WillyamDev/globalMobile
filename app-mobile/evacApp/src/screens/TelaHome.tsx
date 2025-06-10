import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';  
import { RootStackParamList } from '../../App';  
import { useAuth } from '../context/AuthContext'; 

type TelaHomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: TelaHomeNavigationProp;
}

const TelaHome = ({ navigation }: Props) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao Aplicativo de Evacuação!</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Ver Rotas de Evacuação"
            onPress={() => navigation.navigate('RotasSeguras')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Ver Desastres"
            onPress={() => navigation.navigate('Desastres')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Configurações"
            onPress={() => navigation.navigate('Configurações')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Criar/Editar Rota"
            onPress={() => navigation.navigate('TelaRotas')}
          />
        </View>
      </View>

      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 30,
    textAlign: 'center',  
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 30,
  },
  button: {
    marginBottom: 15, 
    borderRadius: 10,
    overflow: 'hidden', 
    backgroundColor: '#4A90E2', 
  },
  logoutButton: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FF4C4C',  // Cor de fundo do botão de logout
  },
});

export default TelaHome;
