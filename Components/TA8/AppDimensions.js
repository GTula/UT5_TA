import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');



export default function AppDimensions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la App Responsiva</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Contenido</Text>
      </View>
      <Text style={styles.text}>Ajustado al tamaño del dispositivo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: width > 400 ? 40 : 20, 
    },
    text: {
      fontSize: width > 400 ? 24 : 16, 
      color: '#333',
      textAlign: 'center',
    },
    box: {
      width: width > 400 ? 200 : 150,
      height: height > 700 ? 200 : 150,
      backgroundColor: '#4CAF50',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxText: {
      fontSize: width > 400 ? 18 : 14,
      color: '#fff',
    },
  });