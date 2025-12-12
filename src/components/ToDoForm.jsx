import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
// Import JSON file directly
import tasksData from '../data/tasks.json';

// Destructure addTask function from props
export default function ToDoForm({ addTask }) {
  // Manage local state for input
  const [taskText, setTaskText] = useState('');
  // State to store available tasks
  const [availableTasks, setAvailableTasks] = useState([]);

  // Step 2: Fetch tasks from JSON file using useEffect
  useEffect(() => {
    // Update state with fetched tasks from JSON
    setAvailableTasks(tasksData.tasks);
  }, []);

  // Step 3: Function to randomly select a task
  const handleGenerateRandomTask = () => {
    if (availableTasks.length > 0) {
      // Generate random index
      const randomIndex = Math.floor(Math.random() * availableTasks.length);
      // Get random task
      const randomTask = availableTasks[randomIndex];
      // Display in input field
      setTaskText(randomTask);
    }
  };

  // Handle adding task
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); // Clear input after adding
    }
  };

  return (
    <View style={styles.container}>
      {/* Input field with event handling */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
        onSubmitEditing={handleAddTask}
      />
      
      <View style={styles.buttonContainer}>
        {/* Add Task Button */}
        <View style={styles.button}>
          <Button 
            title="Add Task" 
            onPress={() => addTask(taskText)} 
            color="#4F46E5"
          />
        </View>

        {/* Generate Random Task Button */}
        <View style={styles.button}>
          <Button 
            title="Generate Random Task" 
            onPress={handleGenerateRandomTask} 
            color="#059669"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    gap: 12,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
  },
});