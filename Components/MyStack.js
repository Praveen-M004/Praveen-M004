import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hello from './Hello';
import HomeScreen from '../Pages/HomeScreen';
import LoginScreen from '../Pages/Login';
import Register from '../Pages/Register';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />  
        <Stack.Screen name="Register" component={Register} />  
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Hello" component={Hello}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;