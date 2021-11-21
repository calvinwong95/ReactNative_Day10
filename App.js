import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/home';
import Details from './src/containers/details';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
            
            },
            }}/>
        <Stack.Screen name="Register" component={Register} options={{
        headerBackVisible: false,
        }}/>

        <Stack.Screen name="Home" component={Home} options={{
        headerBackVisible: false,
        }}/>

        <Stack.Screen name="Details" component={Details} options={{
        headerBackVisible: false,
        }}/>


      


      </Stack.Navigator>
    </NavigationContainer>

  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
