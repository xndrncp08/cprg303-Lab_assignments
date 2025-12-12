import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Part 6: Footer component
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>My ToDo App</Text>
    </View>
  );
};

// Part 5: Step 4 - MainLayout component
const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      {/* Part 6: Display Footer in MainLayout */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EEF2FF',
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D1D5DB',
    marginTop: 20,
  },
  footerText: {
    color: '#6B7280',
    fontSize: 12,
  },
});

export default MainLayout;
