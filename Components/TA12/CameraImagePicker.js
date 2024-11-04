import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraImagePicker() {

  const [image, setImage] = useState()

  const takePhoto = async () =>{
    const result = await ImagePicker.launchCameraAsync();
    if(!result.canceled){
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Button title='Sacar foto' onPress={takePhoto}/>
      <Image source={{uri: image}} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop:10,
  },
});
