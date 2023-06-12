import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen