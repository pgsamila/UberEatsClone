import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/Home/BottomTabs'
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'

const HomeScreen = () => {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants)

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

export default HomeScreen