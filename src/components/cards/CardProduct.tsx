import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import sourceImage from '../../assets/images';
import { cocolate, danger100, secondary, secondary100, white } from '../../utils/colors';

type Props = {
    name: string,
    body: string,
    image: ImageSourcePropType,
    price: number,
    pricefrom: number,
    onPress: () => void

}
export default function CardProduct({ name, body, image, price, pricefrom, onPress }: Props) {

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <View style={styles.content}>
                <View style={styles.wrapImage}>
                    <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
                </View>
                <Text style={styles.title}>{name}</Text>
                <Text numberOfLines={2} style={{ textAlign: "center" }}>{body}</Text>
                <View style={styles.wrappricing}>
                    <Text>{`$${price}.00`}</Text>
                </View>
                {pricefrom > 0 ? <Text style={styles.fromPrice}>
                    Antes <Text style={{ textDecorationLine: 'line-through', marginLeft: 5 }}>{`$${pricefrom}.00`}</Text>
                </Text> : null}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: 'center',
        maxWidth: 180,
    },
    content: {
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: secondary100,
        borderWidth: 1,
        borderColor: secondary,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 15,
        height: 200
    },
    wrapImage: {
        position: 'relative'
    },
    image: {
        width: 100,
        height: 100,
        marginTop: -45,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cocolate
    },
    wrappricing: {
        marginVertical: 10,
        paddingVertical: 5,
        backgroundColor: white,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    fromPrice: {
        color: danger100,
        fontSize: 12,
    }
})