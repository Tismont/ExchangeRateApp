import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/paramTypes';
import Button from '../button/Button';

function Home({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <SafeAreaView style={styles.page}>
      <Button
        title="Currency list"
        onPress={() => navigation.navigate('CurrencyList')}
      />
      <Button title="About" onPress={() => navigation.navigate('About')} />
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

export default Home;
