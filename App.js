import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './router/Button';
import Home from './router/Home';
import Fil from './router/Fil';
import Clavier from './router/Clavier';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Fil" component={Fil} />
        <Stack.Screen name="Clavier" component={Clavier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;