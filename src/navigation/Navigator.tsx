import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import About from '../components/about/About';
import CurrencyDetail from '../components/currencyDetail/CurrencyDetail';
import CurrencyList from '../components/currencyList/CurrencyList';
import Home from '../components/menu/Menu';
import {getHeaderTitle, screenOptions} from './helpers';
import {RootStackParamList} from './paramTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen
        name="CurrencyDetail"
        component={CurrencyDetail}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
