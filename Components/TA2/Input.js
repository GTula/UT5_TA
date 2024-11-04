import { View, Text, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function Input() {

    const[textInput, setTextInput] = useState("")


    const HandlerInput = (event) =>{
        setTextInput(event.nativeEvent.text)
    }

    return (
        <View styles={styles.container}>
            <Text>Ingrese el texto:</Text>
            <TextInput onChange={HandlerInput} style={styles.input}></TextInput>
            <Text>{textInput}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
});