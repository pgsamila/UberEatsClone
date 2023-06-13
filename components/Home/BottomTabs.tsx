import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesom5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState("Home")
    return (
        <View style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: "space-between" }}>
            {/*  */}
            <Icons icon="home" name="Home" activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icons icon="search" name="Search" activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icons icon="shopping-bag" name="Grocery" activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icons icon="receipt" name="Orders" activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icons icon="user" name="Account" activeTab={activeTab}
                setActiveTab={setActiveTab} />
        </View>
    )
}

const Icons = (props: { icon: string, name: string, activeTab: string, setActiveTab: any }) => (
    <TouchableOpacity
        onPress={() => props.setActiveTab(props.name)}
    >
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <FontAwesom5 name={props.icon} size={25} style={{
                marginBottom: 3,
                alignSelf: "center",
                color: props.activeTab === props.name ? "black" : "gray",
                fontSize: props.activeTab === props.name ? 20 : 15,
            }}
            />
            <Text style={{
                fontSize: props.activeTab === props.name ? 16 : 15
            }}>{props.name}</Text>
        </View>
    </TouchableOpacity >
)

export default BottomTabs