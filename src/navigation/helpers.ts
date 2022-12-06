import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import {RootStackParamList} from './paramTypes';

const screenOptions = {
  headerStyle: {
    backgroundColor: 'whitesmoke',
  },
  headerTransparent: true,
  headerTintColor: '#6c9df0',
};

function getHeaderTitle(
  route: RouteProp<RootStackParamList, keyof RootStackParamList>,
) {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'About':
      return 'About';
    case 'CurrencyList':
      return 'Currency list';
    case 'CurrencyDetail':
      return 'Currency Detail';
  }
}

export {screenOptions, getHeaderTitle};
