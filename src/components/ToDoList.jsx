import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// ToDoList Component - Part B, Step 2: Display the Task List
// Destructure the tasks prop
export default function ToDoList({ tasks }) {
  const renderItem = ({ item, index }) => (
    <View style={styles.taskItem}>
      <View style={styles.checkbox} />
      <Text style={styles.taskText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        {tasks.length === 0 ? (
          <Text style={styles.emptyText}>No tasks yet!</Text>
        ) : (
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
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
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4F46E5',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
});
