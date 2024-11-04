import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function PlatformApi() {

    const isIos = Platform.OS == 'ios'

    return (
        <View>
        <Text>{isIos ? 'Porgrama en ios' : 'Programa en Android'}</Text>
        </View>
    )
}