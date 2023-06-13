import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import MenuItems from '../components/RestaurantDetails/MenuItems'
import { useRoute } from '@react-navigation/native';

export default function RestaurantDetails() {

    const route = useRoute()

    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}