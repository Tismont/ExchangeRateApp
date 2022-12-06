import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

function MenuButton({title, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#6c9df0',
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    margin: 10,
  },
  buttonTitle: {
    color: 'whitesmoke',
    fontSize: 21,
    fontWeight: '500',
  },
});

export default MenuButton;
