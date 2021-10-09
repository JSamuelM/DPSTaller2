import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

import {styles} from '../../assets/styles';

const Factorial = () => {
  const [num, setNum] = useState(null);
  const [total, setTotal] = useState(0);

  const factorial = () => {
    if (isNaN(num)) {
      Alert.alert('Error', 'Debe ingresar un valor numerico', [
        {
          text: 'Ok',
        },
      ]);
    } else {
      let value = 1;
      for (let index = 2; index <= num; index++) {
        value = value * index;
      }
      setTotal(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>Factorial de un número</Text>
          <Text style={styles.subtitle}>
            Ingrese un número para poder obtener el factorial de este mismo.
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNum}
            value={num}
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={factorial} />
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

export default Factorial;
