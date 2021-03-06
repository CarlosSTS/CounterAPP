import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Counter() {
  const navigation = useNavigation();
  const [counter, setConuter] = useState(0)

  function CounterAdd() {
    setConuter(counter + 1)
  }

  function NavigateToDetail(counter) {
    navigation.navigate('Detail', { counter })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>Contador:{counter}</Text>

      <Button title="Adicionar"
        color="#132742"
        onPress={CounterAdd}>
      </Button>
      <View style={{ marginTop: 8 }} />
      <Button title="Ir para detalhe"
        color="#33dd99"
        onPress={() => NavigateToDetail(counter)}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  }
})