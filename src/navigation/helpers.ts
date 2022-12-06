import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import {RootStackParamList} from './paramTypes';

const screenOptions = {
  headerStyle: {
    backgroundColor: '#6c9df0',
  },
  headerTransparent: true,
  headerTintColor: 'whitesmoke',
};

function getHeaderTitle(
  route: RouteProp<RootStackParamList, keyof RootStackParamList>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'About':
      return 'About';
    case 'CurrencyList':
      return 'Currency list';
  }
}

export {screenOptions, getHeaderTitle};
