import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

import {styles} from '../../assets/styles';

const Division = () => {
  const [numOne, setNumOne] = useState(null);
  const [numTwo, setNumTwo] = useState(null);
  const [total, setTotal] = useState(0);

  const division = () => {
    if (isNaN(numOne) || isNaN(numTwo)) {
      Alert.alert('Error', 'Debe ingresar valores numéricos', [
        {
          text: 'Ok',
        },
      ]);
    } else {
      setTotal(numOne / numTwo);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>División de dos números</Text>
          <Text style={styles.subtitle}>
            Ingrese 2 números para poder realizar la división.
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Número 1:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumOne}
            value={numOne}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Número 2:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumTwo}
            value={numTwo}
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={division} />
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

export default Division;
