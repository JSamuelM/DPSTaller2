import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import {styles} from '../../assets/styles';

const Division = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>División de dos números</Text>
          <Text style={styles.subtitle}>Descripción</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Label</Text>
          <TextInput style={styles.input} />
          <Button title="Calcular" />
        </View>
        <View style={styles.result}>
          <Text style={styles.textResult}>El resultado es: </Text>
          <Text style={[styles.textResult, styles.total]}>5</Text>
        </View>
      </View>
    </View>
  );
};

export default Division;
