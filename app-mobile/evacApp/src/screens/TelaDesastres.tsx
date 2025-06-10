import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaDesastres = () => {
  const desastres = [
    { id: 1, nome: 'Enchente no Rio', descricao: 'Alerta de enchente na região norte.' },
    { id: 2, nome: 'Incêndio Florestal', descricao: 'Incêndio em área próxima a São Paulo.' },
    { id: 3, nome: 'Terremoto em Sismogramas', descricao: 'Possível terremoto na área central.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informações sobre Desastres</Text>
      <ScrollView>
        {desastres.map((desastre) => (
          <View key={desastre.id} style={styles.card}>
            <Text style={styles.cardTitle}>{desastre.nome}</Text>
            <Text style={styles.cardDescription}>{desastre.descricao}</Text>
          </View>
        ))}
      </ScrollView>
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
  card: {
    backgroundColor: '#FFFFFF', 
    padding: 20,
    borderRadius: 15,  
    marginBottom: 20,  
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },  
    elevation: 3, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9900',  
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',  
  },
});

export default TelaDesastres;
