import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function About() {
  return (
    <SafeAreaView style={styles.page}>
      <Text>About</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
