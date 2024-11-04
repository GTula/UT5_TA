import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const images = [
  {
    id: '1',
    uri: 'https://media.gettyimages.com/id/1470059015/es/foto/paris-france-lionel-messi-poses-with-the-best-fifa-mens-payer-2022-award-during-the-best-fifa.jpg?s=612x612&w=0&k=20&c=zZ19gmOd2T9BNPU2ZvMeH6Ue-XTgZ1nOHqm4IMjh520=',
    description: 'Descripción de la Imagen 1',
  },
  {
    id: '2',
    uri: 'https://media.gettyimages.com/id/1765731858/es/foto/paris-france-lionel-messi-attends-the-67th-ballon-dor-ceremony-at-theatre-du-chatelet-on.jpg?s=612x612&w=0&k=20&c=pzDWQp7THp7hyosJqY5U8C_GjIwiUdj_IQ3qO-wsy6g=',
    description: 'Descripción de la Imagen 2',
  },
  {
    id: '3',
    uri: 'https://media.gettyimages.com/id/52744077/es/foto/fc-barcelonas-argentinian-messi-celebrates-his-goal-against-albacete-during-their-spanish-league.jpg?s=612x612&w=gi&k=20&c=BIVK5gVh8CXCYvkjCLMcLxGox5xO-93ey4LISDoaZoE=',
    description: 'Descripción de la Imagen 3',
  },
  {
    id: '4',
    uri: 'https://media.gettyimages.com/id/955410340/es/foto/barcelona-spain-lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=Y26KFI-xxjhULCi-4iYwp7ORG7lQNR-iWhfjXKXoAu8=',
    description: 'Descripción de la Imagen 4',
  },
];

export default function ImageGallery() {
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  galleryContainer: {
    padding: 10,
  },
  imageContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
});
