import React from 'react';
import About from '../components/pages/about/About';
import CurrencyDetail from '../components/pages/currencyDetail/CurrencyDetail';
import CurrencyList from '../components/pages/currencyList/CurrencyList';
import Home from '../components/pages/home/Home';
import {screenOptions} from './helpers';
import {RootStackParamList} from './paramTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: 'About',
        }}
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          headerTitle: 'Currency list',
        }}
      />
      <Stack.Screen
        name="CurrencyDetail"
        component={CurrencyDetail}
        options={{
          headerTitle: 'Currency detail',
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
