import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Destructure addTask function from props
export default function ToDoForm({ addTask }) {
  // Part 2: Step 1 - Use useState to manage local state
  const [taskText, setTaskText] = React.useState('');

  // Part 4: Enhancement - Clear input and prevent duplicates
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); // Clear input after adding
    }
  };

  return (
    <View style={styles.container}>
      {/* Part 2: Step 2 - Input field with event handling */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
        onSubmitEditing={handleAddTask}
      />

      {/* Part 2: Step 3 - Button with onPress event */}
      <Button
        title="Add Task"
        onPress={() => addTask(taskText)}
        color="#4F46E5"
      />
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
});
  