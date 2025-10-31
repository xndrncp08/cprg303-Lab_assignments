import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function ToDoList({ tasks = [], toggleTask, deleteTask }) {
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
    <View style={styles.container}>
      <View style={styles.listWrapper}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  listWrapper: {
    maxHeight: 384,
  },
  list: {
    flexGrow: 0,
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
    paddingVertical: 4,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '500',
  },
});