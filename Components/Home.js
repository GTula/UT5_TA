import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Selecciona una TA</Text>
      <Button
        title="Ir a TA1 (Counter)"
        onPress={() => navigation.navigate('TA1')}
      />
      <Button
        title="Ir a TA2 (Input)"
        onPress={() => navigation.navigate('TA2')}
      />
      <Button
        title="Ir a TA3 (List tasks)"
        onPress={() => navigation.navigate('TA3')}
      />
      <Button
        title="Ir a TA4 (Change Image)"
        onPress={() => navigation.navigate('TA4')}
      />
      <Button
        title="Ir a TA5 (Gallery images)"
        onPress={() => navigation.navigate('TA5')}
      />
      <Button
        title="Ir a TA6 (Swipe List)"
        onPress={() => navigation.navigate('TA6')}
      />
      <Button
        title="Ir a TA7 (Movie Search)"
        onPress={() => navigation.navigate('TA7')}
      />
      <Button
        title="Ir a TA8 (Api Dimensions)"
        onPress={() => navigation.navigate('TA8')}
      />
      <Button
        title="Ir a TA9 (Api Platform)"
        onPress={() => navigation.navigate('TA9')}
      />
      <Button
        title="Ir a TA10 (Expo Location)"
        onPress={() => navigation.navigate('TA10')}
      />
      <Button
        title="Ir a TA11 (Image Picker)"
        onPress={() => navigation.navigate('TA11')}
      />
      <Button
        title="Ir a TA12 (Camera Picker)"
        onPress={() => navigation.navigate('TA12')}
      />
      <Button
        title="Ir a TA13 (Camera Expo)"
        onPress={() => navigation.navigate('TA13')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap:10,
  },
});
