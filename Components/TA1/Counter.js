import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext, useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const ButtonIncrement = () =>{
        setCounter(counter + 1)
    }
    const ButtonDecrement = () =>{
        setCounter(counter - 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles}>
                <Button title='Aumentar' onPress={ButtonIncrement} color="blue" ></Button>
            </View>
            <View style={styles}>
                <Button title='Disminuir' onPress={ButtonDecrement} ></Button>
            </View>
            <Text>{counter}</Text>
        </View>
    )
        
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });