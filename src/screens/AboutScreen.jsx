import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

// Part 3: Step 1 - AboutScreen displays app name, your name, and current date
// Part 4: Implement Navigation - use navigation prop
function AboutScreen({ navigation }) {
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    // Part 5: Step 5.2 - Wrap content with MainLayout
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>My ToDo List App</Text>
          
          <View style={styles.infoSection}>
            <Text style={styles.label}>Created By:</Text>
            <Text style={styles.value}>Your Name</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Current Date:</Text>
            <Text style={styles.value}>{currentDate}</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              A simple and elegant ToDo list application built with React Native.
              Stay organized and productive by managing your daily tasks efficiently.
            </Text>
          </View>
        </View>

        {/* Part 4: Navigation button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            color="#4F46E5"
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#312E81',
    textAlign: 'center',
    marginBottom: 24,
  },
  infoSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#1F2937',
    fontWeight: '500',
  },
  description: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  descriptionText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default AboutScreen;