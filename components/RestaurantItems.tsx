import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://s3-media0.fl.yelpcdn.com/bphoto/3pPmJ2mOk6wxmFTjCx1FYQ/348s.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://www.architectandinteriorsindia.com/cloud/2021/11/15/Story-3-1.gif",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

const RestaurantItems = (props: { restaurantData: any[]; }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View
                    key={index}
                    style={{
                        marginTop: 10,
                        padding: 15,
                        backgroundColor: "white"
                    }}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}


const RestaurantImage = (props: { image: string }) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props: { name: string, rating: string }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight: "bold"
            }}>{props.name}</Text>
            <Text style={{
                fontSize: 13,
                color: "gray"
            }}>35-45・min</Text>
        </View>
        <View style={{
            backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", borderRadius: 15, justifyContent: "center"
        }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)

export default RestaurantItems