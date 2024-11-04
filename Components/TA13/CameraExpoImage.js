import React, { useEffect, useState, useRef } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { Camera, CameraView } from 'expo-camera';

export default function CameraExpoImage() {
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null); 

    

    const takePhoto = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImage(photo.uri);
        }
    };

    

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <Button title="Sacar foto" onPress={takePhoto} />
                </View>
            </CameraView>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: '100%',
        height: '80%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
});
