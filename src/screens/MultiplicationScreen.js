import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

import {styles} from '../../assets/styles';

const Multiplication = () => {
  const [numUno, setNumUno] = useState(null);
  const [numDos, setNumDos] = useState(null);
  const [total, setTotal] = useState(0);

  const multiplicacion = () => {
    if (!numUno || !numDos || isNaN(numUno) || isNaN(numDos)) {
      Alert.alert('Error', 'Debe ingresar valores numéricos', [
        {
          text: 'Ok',
        },
      ]);
    } else if (numUno != null && numDos != null) {
      setTotal(numUno * numDos);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>Multiplicación de dos números</Text>
          <Text style={styles.subtitle}>
            Ingrese 2 números para poder realizar la multiplicacion.
          </Text>
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
          <Button title="Calcular" onPress={multiplicacion} />
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

export default Multiplication;
