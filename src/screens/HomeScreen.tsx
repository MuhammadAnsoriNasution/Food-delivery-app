import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { brochette, burger, desayuno, pizza, sandwich } from '../assets/images';
import CardCategory from '../components/cards/CardCategory';
import InputSearch from '../components/form/InputSearch';
import { cocolate, danger100, secondary100, white } from '../utils/colors';

export default function HomeScreen() {
    const datacategory = [
        { category: 'Pizzas', image: pizza, },
        { category: 'Burger', image: burger, },
        { category: 'Sandwich', image: sandwich, },
        { category: 'Desayuno', image: desayuno, },
        { category: 'Brochets', image: brochette, },
        { category: 'Pizzas', image: pizza, },
        { category: 'Burger', image: burger, },
        { category: 'Sandwich', image: sandwich, },
        { category: 'Desayuno', image: desayuno, },
        { category: 'Brochets', image: brochette, },
    ]
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.halo}>Hey There!</Text>
            <Text style={styles.title}>Find your meal now</Text>
            <InputSearch />
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', 'justifyContent': 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', color: cocolate }}>Categories</Text>
                    <Text style={{ fontWeight: 'bold', color: cocolate }}>See All</Text>
                </View>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scrollView}
            >
                {
                    datacategory.map((item, index) => {
                        let color = index == 0 ? white : secondary100
                        let bgColor = index == 0 ? danger100 : white
                        return <CardCategory item={item} color={color} bgColor={bgColor} />
                    })
                }
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    halo: {
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: cocolate,
        marginBottom: 20
    },
    scrollView: {
        flexGrow: 0,
        marginTop: 10,
        marginHorizontal: -10,
    }
})
