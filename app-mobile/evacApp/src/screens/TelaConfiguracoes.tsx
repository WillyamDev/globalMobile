import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const TelaConfiguracoes = () => {
  const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);

  const handleToggle = () => {
    setNotificacoesAtivas((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configurações</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificações de Desastres</Text>
        <Switch
          value={notificacoesAtivas}
          onValueChange={handleToggle}
          thumbColor={notificacoesAtivas ? '#4A90E2' : '#FF9900'}
          trackColor={{ false: '#FFDDDD', true: '#A3D6FF' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',  
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',  
    marginBottom: 20,
    textAlign: 'center',  
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',  
    borderRadius: 15,  
    marginBottom: 20,
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,  
  },
  optionText: {
    fontSize: 18,
    color: '#333',  
  },
});

export default TelaConfiguracoes;
