import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput, Button, FlatList } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'


export default function List() {

  const [listTasks, setListTasks] = useState([])
  const [task, setTask] = useState()

  const addTask = () =>{
    setListTasks([...listTasks, task]);
    setTask('');
  }

  const removeTask = (index) => {
    const newTasks = listTasks.filter((_, i) => i !== index);
    setListTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Añadir Tarea" onPress={addTask} />
      <FlatList
        data={listTasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.Text}>-{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
            
            
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
});