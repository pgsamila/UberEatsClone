import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantDetails from './screens/RestaurantDetails';
import { enableScreens } from 'react-native-screens';

export default function RootNavigation() {
    enableScreens();
    const Stack = createStackNavigator()

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}