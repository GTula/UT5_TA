import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, FlatList } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function SwipeList() {
  const [listTasks, setListTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setListTasks([...listTasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = listTasks.filter((_, i) => i !== index);
    setListTasks(newTasks);
  };

  const handlerSwipe = (index) => (
    <TouchableOpacity onPress={() => removeTask(index)} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Eliminar</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput 
        value={task}
        onChangeText={setTask}
        style={styles.input}
        placeholder="Añadir tarea"
      />
      <Button title="Añadir Tarea" onPress={addTask} />
      <FlatList
        data={listTasks}
        renderItem={({ item, index }) => (
          <Swipeable renderRightActions={() => handlerSwipe(index)}>
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
            </View>
          </Swipeable>
        )}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
