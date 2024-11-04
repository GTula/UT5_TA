import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { useState } from 'react'

export default function ImageChange() {

    const [isFirstImage, setIsFirstImage] = useState(true);

    const firstImage = 'https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750';
    const secondImage = 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/05/22/3137560-64306928-2560-1440.jpg';

    const toggleImage = () => {
        setIsFirstImage(!isFirstImage); 
      };
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: isFirstImage ? firstImage : secondImage }}
                style={styles.image}
            />
            <Button title='Cambiar' onPress={toggleImage}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap:10,
    },
    image: {
      width: 200,
      height: 200, 
      borderRadius: 10,
    },
  });