import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <HeaderButton
                text="Pickup"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = (props: { text: string, activeTab: string, setActiveTab: any }) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: 'bold'
        }}>{props.text}</Text>
    </TouchableOpacity>
)

export default HeaderTabs