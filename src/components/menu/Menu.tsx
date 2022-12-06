import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MenuButton from './MenuButton';
import {RootStackParamList} from '../../navigation/paramTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props) {
  return (
    <SafeAreaView style={styles.page}>
      <MenuButton
        title="Currency list"
        onPress={() => navigation.navigate('CurrencyList')}
      />
      <MenuButton title="About" onPress={() => navigation.navigate('About')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf0f7',
  },
});

export default Home;
