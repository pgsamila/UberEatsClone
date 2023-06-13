import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import RestaurantDetails from '../../screens/RestaurantDetails';

const image = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"

const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai・Confart・Food・$$・4・(2345+)"

const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
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