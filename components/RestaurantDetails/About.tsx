import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const About = (props: { route: any }) => {

    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((data: string) => data).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props: { image: string }) => (
    <Image source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }} />
)

const RestaurantTitle = (props: { title: string }) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >{props.title}</Text>
)

const RestaurantDescription = (props: { description: string }) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5
        }}
    >{props.description}</Text>
)

export default About