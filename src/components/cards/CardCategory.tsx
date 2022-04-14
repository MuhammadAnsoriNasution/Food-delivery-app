import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Item = {
    image: ImageSourcePropType,
    category: string
}
type Props = {
    color: string,
    bgColor: string,
    item: Item
}
export default function CardCategory({ color, bgColor, item }: Props) {
    return (
        <TouchableOpacity style={[styles.container, { borderColor: color, backgroundColor: bgColor }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={{ fontSize: 12, color: color }}>{item.category}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 70,
        borderRadius: 15,
        marginHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'center',
    },
})
