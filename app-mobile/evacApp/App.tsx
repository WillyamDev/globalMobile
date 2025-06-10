import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext'; 
import TelaLogin from './src/screens/TelaLogin';
import TelaHome from './src/screens/TelaHome';
import TelaRotasSeguras from './src/screens/TelaRotasSeguras'; 
import TelaDesastres from './src/screens/TelaDesastres';
import TelaConfiguracoes from './src/screens/TelaConfiguracoes';
import TelaRotas from './src/screens/TelaRotas'; 

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  RotasSeguras: undefined; 
  Desastres: undefined;
  Configurações: undefined;
  TelaRotas: undefined;  
};

const Stack = createStackNavigator<RootStackParamList>();  

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {}
          <Stack.Screen name="Login" component={TelaLogin} />
          {}
          <Stack.Screen name="Home" component={TelaHome} />
          {}
          <Stack.Screen name="RotasSeguras" component={TelaRotasSeguras} /> 
          {}
          <Stack.Screen name="Desastres" component={TelaDesastres} />
          {}
          <Stack.Screen name="Configurações" component={TelaConfiguracoes} />
          {}
          <Stack.Screen name="TelaRotas" component={TelaRotas} />  
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
