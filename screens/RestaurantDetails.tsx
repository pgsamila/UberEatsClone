import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import MenuItems from '../components/RestaurantDetails/MenuItems'
// import { useNavigation } from '@react-navigation/native'

export default function RestaurantDetails() {
    // const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}