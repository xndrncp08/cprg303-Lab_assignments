import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// ToDoForm Component
function ToDoForm({ inputValue, setInputValue, addTask }) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={addTask}
          placeholder="Add a new task..."
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ToDoList Component
function ToDoList({ tasks, toggleTask, deleteTask }) {
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
        style={styles.checkboxContainer}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>
      
      <Text
        style={[
          styles.taskText,
          item.completed && styles.taskTextCompleted
        ]}
      >
        {item.text}
      </Text>
      
      <TouchableOpacity
        onPress={() => deleteTask(item.id)}
        style={styles.deleteButton}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks yet. Add one above!</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
}

// App Component
export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Native', completed: false },
    { id: 2, text: 'Build a ToDo app', completed: false },
    { id: 3, text: 'Master component composition', completed: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const remainingTasks = tasks.filter(t => !t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>My ToDo List</Text>

          <ToDoForm 
            inputValue={inputValue}
            setInputValue={setInputValue}
            addTask={addTask}
          />

          <ToDoList 
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

          <Text style={styles.footer}>
            {remainingTasks} of {tasks.length} tasks remaining
          </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#312E81',
    marginBottom: 32,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    fontSize: 16,
    color: '#1F2937',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  list: {
    maxHeight: 400,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6B7280',
    paddingVertical: 32,
    fontSize: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    gap: 12,
  },
  checkboxContainer: {
    padding: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4F46E5',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4F46E5',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 16,
    textAlign: 'center',
    color: '#4B5563',
    fontSize: 14,
  },
});