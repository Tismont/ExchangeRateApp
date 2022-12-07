import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../../navigation/paramTypes';
import {styles} from './styles';

function CurrencyDetail({
  route,
}: NativeStackScreenProps<RootStackParamList, 'CurrencyDetail'>) {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.currency}>{route.params.currency}</Text>
      <Text style={styles.exchangeRate}>{route.params.exchangeRate}</Text>
    </SafeAreaView>
  );
}

export default CurrencyDetail;
