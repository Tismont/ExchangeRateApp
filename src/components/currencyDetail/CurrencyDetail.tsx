import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../../navigation/paramTypes';

function CurrencyDetail({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CurrencyDetail'>) {
  console.log(route.params);

  return (
    <SafeAreaView style={styles.page}>
      <Text>{route.params.currency}</Text>
      <Text>{route.params.currencyRate}</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Nack</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentContainer: {},
  column: {
    justifyContent: 'space-around',
  },
  itemContainer: {
    width: 100,
    height: 42,
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    margin: 10,
  },
  itemText: {
    alignContent: 'center',
  },
});

export default CurrencyDetail;
