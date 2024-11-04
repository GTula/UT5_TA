import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function MovieSearch() {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');


  const fetchMovie = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=ac97b3b2&t=${movieName}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovieData(data);
        setError('');
      } else {
        setMovieData(null);
        setError('Película no encontrada');
      }
    } catch (err) {
      setError('Ocurrió un error. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de la película"
        value={movieName}
        onChangeText={setMovieName}
      />
      <Button title="Buscar película" onPress={fetchMovie} />

      {movieData && (
        <View style={styles.movieContainer}>
          <Image source={{ uri: movieData.Poster }} style={styles.poster} />
          <Text style={styles.title}>{movieData.Title}</Text>
          <Text style={styles.plot}>{movieData.Plot}</Text>
        </View>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  movieContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  plot: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
});
