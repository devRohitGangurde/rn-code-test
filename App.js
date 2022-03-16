// import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import DetailPage from './src/pages/Home/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
