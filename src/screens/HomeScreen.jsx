import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

// Part 3: Step 1 - HomeScreen component renders to do list and form
// Part 4: Implement Navigation - use navigation prop
function HomeScreen({ navigation }) {
  // State Management
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Add task function
  const addTask = (taskText) => {
    if (taskText.trim() === '') {
      Alert.alert('Empty Task', 'Please enter a task.');
      return;
    }

    if (tasks.includes(taskText)) {
      Alert.alert('Duplicate Task', 'This task already exists!');
      return;
    }

    setTasks([...tasks, taskText]);
  };

  return (
    // Part 5: Step 5.2 - Wrap content with MainLayout
    <MainLayout>
      <View style={styles.content}>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            📊 Total Tasks: {tasks.length}
          </Text>
        </View>

        {/* Part 4: Navigation button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            color="#4F46E5"
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  footer: {
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
  footerText: {
    textAlign: 'center',
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;