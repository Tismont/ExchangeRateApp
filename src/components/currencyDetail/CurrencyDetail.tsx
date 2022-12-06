import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useQuery, UseQueryResult} from 'react-query';
import {RootStackParamList} from '../../navigation/paramTypes';

interface Currencies {
  supportedPairs: [string];
  message: string;
  code: number;
}

type Props = NativeStackScreenProps<RootStackParamList, 'CurrencyDetail'>;

function CurrencyDetail({route, navigation}: Props) {
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
