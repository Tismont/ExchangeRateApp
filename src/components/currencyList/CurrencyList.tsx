import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useQuery, UseQueryResult} from 'react-query';
import {RootStackParamList} from '../../navigation/paramTypes';

interface Currencies {
  amount: number;
  base: string;
  date: string;
  rates: {CZK: number; DKK: number; GBP: number; USD: number};
}

type Props = NativeStackScreenProps<RootStackParamList, 'CurrencyList'>;

function CurrencyList({navigation}: Props) {
  const {isLoading, error, data}: UseQueryResult<Currencies, Error> = useQuery<
    Currencies,
    Error
  >('currencyExchangeRates', () =>
    fetch('https://api.frankfurter.app/latest?to=USD,GBP,CZK,DKK').then(res =>
      res.json(),
    ),
  );

  //TODO Error, Currencies.rates to ENUM?...

  console.log(data?.rates['CZK']);
  console.log(data?.rates);

  return (
    <SafeAreaView style={styles.page}>
      <Text>Default content</Text>
      {!isLoading && data ? (
        <FlatList
          data={Object.keys(data.rates)}
          numColumns={2}
          columnWrapperStyle={styles.column}
          style={styles.contentContainer}
          renderItem={item => {
            return (
              <Pressable
                style={styles.itemContainer}
                onPress={() =>
                  navigation.navigate('CurrencyDetail', {
                    currency: item.item,
                    currencyRate: data?.rates[item.item],
                  })
                }>
                <Text style={styles.itemText}>{item.item}</Text>
              </Pressable>
            );
          }}
        />
      ) : (
        <ActivityIndicator size="small" color="whitesmoke" />
      )}
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

export default CurrencyList;
