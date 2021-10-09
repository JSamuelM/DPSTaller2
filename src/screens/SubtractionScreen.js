import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { styles } from '../../assets/styles';

const Subtraction = () => {
  const [numUno, setNumUno] = useState(null);
  const [numDos, setNumDos] = useState(null);
  const [total, setTotal] = useState(0);

  const resta = () => {
    if (isNaN(numUno) || isNaN(numDos)) {
      Alert.alert('Error', 'Debe ingresar valores numéricos', [
        {
          text: 'Ok',
        },
      ]);
    } else {
      setTotal(Number(numUno) - Number(numDos));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>Resta de dos números</Text>
          <Text style={styles.subtitle}>Descripción</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Número 1:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumUno}
            value={numUno}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Número 2:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumDos}
            value={numDos}
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={resta} />
        </View>
        <View style={styles.result}>
          <Text style={styles.textResult}>El resultado es: </Text>
          <Text style={[styles.textResult, styles.total]}>
            {new Intl.NumberFormat().format(total)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Subtraction;
