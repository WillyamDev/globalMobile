import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';

const TelaRotasSeguras = () => {
  const [rotas, setRotas] = useState<any[]>([]);
  const [erro, setErro] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRota, setSelectedRota] = useState<any | null>(null);
  const [updatedLocalizacao, setUpdatedLocalizacao] = useState<string>('');
  const [updatedCoordenadas, setUpdatedCoordenadas] = useState<string>('');

  const apiUrl = 'https://localhost:7055/api/rotas-seguras'; 

  const carregarRotas = async () => {
    try {
      const response = await axios.get(apiUrl);
      setRotas(response.data); 
    } catch (error) {
      setErro('Erro ao carregar as rotas');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    carregarRotas();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setRotas(rotas.filter((rota) => rota.id !== id)); 
      Alert.alert('Sucesso', 'Rota excluída com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao excluir a rota');
    }
  };

  const handleEdit = (rota: any) => {
    setSelectedRota(rota);
    setUpdatedLocalizacao(rota.localizacao);
    setUpdatedCoordenadas(rota.coordenadas);
  };

  const handleSaveEdit = async () => {
    if (!updatedLocalizacao || !updatedCoordenadas) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos');
      return;
    }

    const updatedRota = { ...selectedRota, localizacao: updatedLocalizacao, coordenadas: updatedCoordenadas };
    
    try {
      await axios.put(`${apiUrl}/${selectedRota.id}`, updatedRota);
      setRotas(rotas.map((rota) => (rota.id === selectedRota.id ? updatedRota : rota)));
      setSelectedRota(null);
      Alert.alert('Sucesso', 'Rota atualizada com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao atualizar a rota');
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.localizacao}</Text>
      <Text>{item.coordenadas}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rotas Seguras</Text>

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      {loading ? (
        <Text style={styles.loadingText}>Carregando rotas...</Text>
      ) : (
        <FlatList
          data={rotas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} 
        />
      )}

      {selectedRota && (
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Editar Rota</Text>
          <TextInput
            style={styles.input}
            value={updatedLocalizacao}
            onChangeText={setUpdatedLocalizacao}
            placeholder="Localização"
          />
          <TextInput
            style={styles.input}
            value={updatedCoordenadas}
            onChangeText={setUpdatedCoordenadas}
            placeholder="Coordenadas"
          />
          <TouchableOpacity style={styles.buttonSave} onPress={handleSaveEdit}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      )}

      <Button
        title="Voltar para a Home"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A90E2', 
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9900',  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonEdit: {
    backgroundColor: '#FF9900',
    padding: 10,
    borderRadius: 5,
  },
  buttonDelete: {
    backgroundColor: '#FF4D4D',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  formHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A90E2',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonSave: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4A90E2',
  },
});

export default TelaRotasSeguras;
