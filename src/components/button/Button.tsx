import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

function Button({title, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'whitesmoke',
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    margin: 10,
  },
  buttonTitle: {
    color: '#6c9df0',
    fontSize: 21,
    fontWeight: '500',
  },
});

export default Button;
