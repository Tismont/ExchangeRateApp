import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {colors} from './src/style/colors';

const queryClient = new QueryClient();

const navTheme = DefaultTheme;
navTheme.colors.background = colors.primaryBlue;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={navTheme}>
        <Navigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
