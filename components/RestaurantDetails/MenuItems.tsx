import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lattuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/10/Lasagne-square-FS-79.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the size",
        price: "$19.20",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"
    },
    {
        title: "Tandoori Roti",
        description: "Amazing Indian roti",
        price: "$19.20",
        image: "https://i0.wp.com/www.indianrecipeinfo.com/wp-content/uploads/2011/12/Tandoori-Roti.jpg"
    },
    {
        title: "Chai Tea",
        description: "Amazing Indian Herbal Tea",
        price: "$5.50",
        image: "https://assets.bonappetit.com/photos/57acca021b334044149751b5/master/w_4495,h_2997,c_limit/bas-best-masala-chai.jpg"
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
})

const MenuItems = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage image={food.image} />
                    </View>
                    <Divider width={0.5} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props: { food: { title: string; description: string; price: string; image: string } }) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props: { image: string }) => (
    <View>
        <Image source={{ uri: props.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
    </View>
)

export default MenuItems