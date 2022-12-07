import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function About() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>Exchange rates app...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'whitesmoke',
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  content: {
    fontSize: 20,
    color: '#568dfc',
  },
});

export default About;
