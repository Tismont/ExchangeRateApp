import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useQuery, UseQueryResult} from 'react-query';
import {formatDate} from '../../../helpers/date';
import {RootStackParamList} from '../../../navigation/paramTypes';
import Button from '../../button/Button';
import {styles} from './styles';
import {Currencies} from './types';

function CurrencyList({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CurrencyList'>) {
  const {isLoading, data}: UseQueryResult<Currencies, Error> = useQuery<
    Currencies,
    Error
  >(
    'currencyExchangeRates',
    () =>
      fetch('https://api.frankfurter.app/latest?to=USD,GBP,CZK,DKK').then(res =>
        res.json(),
      ),
    {
      onError: error => Alert.alert(error.message),
    },
  );

  return (
    <SafeAreaView style={styles.page}>
      {!isLoading && data ? (
        <FlatList
          data={Object.keys(data.rates)}
          contentContainerStyle={styles.contentContainer}
          renderItem={item => (
            <Button
              title={item.item}
              onPress={() =>
                navigation.navigate('CurrencyDetail', {
                  currency: item.item,
                  exchangeRate:
                    data?.rates[item.item as keyof typeof data.rates],
                })
              }
            />
          )}
          ListHeaderComponent={() => (
            <>
              <View style={styles.headerRow}>
                <Text style={styles.base}>base: </Text>
                <Text style={styles.baseResult}>{data.base}</Text>
              </View>

              <View style={styles.headerRow}>
                <Text style={styles.amountData}>amount: {data.amount}</Text>
                <Text style={styles.amountData}>
                  date: {formatDate(data?.date)}
                </Text>
              </View>
            </>
          )}
          ListHeaderComponentStyle={styles.headerContainer}
        />
      ) : (
        <ActivityIndicator size="small" color="whitesmoke" />
      )}
    </SafeAreaView>
  );
}

export default CurrencyList;
