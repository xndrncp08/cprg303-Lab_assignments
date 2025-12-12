import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

// App Component
export default function App() {
  // State Management - array of task strings
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // Part 3: Implement addTask function to update state
  const addTask = taskText => {
    // Part 4: Enhancement - Don't allow duplicate tasks
    if (taskText.trim() === '') {
      Alert.alert('Empty Task', 'Please enter a task.');
      return;
    }

    if (tasks.includes(taskText)) {
      Alert.alert('Duplicate Task', 'This task already exists!');
      return;
    }

    // Add new task to the list
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Part 4: Enhanced title styling */}
          <Text style={styles.title}>My ToDo List</Text>

          {/* Pass addTask as prop to ToDoForm */}
          <ToDoForm addTask={addTask} />

          {/* Pass tasks to ToDoList */}
          <ToDoList tasks={tasks} />

          {/* Part 4: Enhanced footer with more info */}
          <View style={styles.footerContainer}>
            <Text style={styles.footer}>Total Tasks: {tasks.length}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#312E81',
    marginBottom: 32,
    letterSpacing: 1,
  },
  footerContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  footer: {
    textAlign: 'center',
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '600',
  },
});
