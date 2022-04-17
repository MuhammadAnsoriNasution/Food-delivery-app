import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ImageProps, ImageSourcePropType } from 'react-native';
import { cocolate, danger100, secondary, secondary100, white } from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
type Props = {
    route: RouteProp<{
        params: {
            data: {
                name: string,
                image: ImageSourcePropType,
                price: number,
                body: string
            }
        }
    }>
}

export default function DetailScreen({ route }: Props) {
    const { data } = route.params
    const [size, setSize] = useState<{ size: string, active: boolean }[]>([
        { size: 'CH', active: true },
        { size: 'MD', active: false },
        { size: 'GD', active: false },
        { size: 'FM', active: false },
    ])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={secondary100} />
            <View style={styles.containercontent}>
                <Image source={data.image} style={styles.image} />
                <View style={styles.wrapButton}>
                    <TouchableOpacity >
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.textButton}>02</Text>
                    <TouchableOpacity >
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.title}>{data.name}</Text>
                        <View style={styles.wrapheart}>
                            <AntDesign name='hearto' size={15} color={white} />
                        </View>
                    </View>
                    <Text style={styles.price}>{`$${data.price}.00`}</Text>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.body}>{data.body}</Text>
                    <Text style={styles.chooseSize}>Choose Size</Text>
                    <View style={styles.wrapSize}>

                        {
                            size.map((item, index) => {
                                let color = item.active ? white : cocolate
                                let bgColor = item.active ? danger100 : white
                                let borderColor = item.active ? danger100 : secondary
                                return <TouchableOpacity
                                    onPress={() => setSize(p => p.map((it) => it.size == item.size ? { ...it, active: !it.active } : { ...it, active: false }))}
                                    style={[styles.itemSize, { backgroundColor: bgColor, borderColor: borderColor, borderWidth: 1 }]}>
                                    <Text style={[styles.textItemSize, { color: color }]}>{item.size}</Text>
                                </TouchableOpacity>
                            })
                        }
                    </View>
                </View>
                <TouchableOpacity style={styles.addBag}>
                    <Text style={styles.textAddBag}>Add To Bag</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondary100
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'center',
        marginTop: -90
    },
    containercontent: {
        backgroundColor: white,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 150,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    wrapButton: {
        flexDirection: 'row',
        width: 100,
        backgroundColor: danger100,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 30
    },
    textButton: {
        color: white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    wrapTitle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cocolate
    },
    wrapheart: {
        width: 30,
        height: 30,
        backgroundColor: danger100,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        justifyContent: 'flex-start',
        width: '100%',
        flex: 1,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,

    },
    about: {
        fontWeight: 'bold',
        color: cocolate,
        fontSize: 16
    },
    body: {
        fontWeight: 'bold',
        color: cocolate,
        lineHeight: 18
    },
    chooseSize: {
        marginTop: 20,
        fontWeight: 'bold',
        color: cocolate,
        marginBottom: 10
    },
    wrapSize: {
        flexDirection: 'row',
        marginHorizontal: -10
    },
    itemSize: {
        backgroundColor: danger100,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10
    },
    textItemSize: {
        color: white
    },
    addBag: {
        backgroundColor: danger100,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 20,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    textAddBag: {
        color: white,
        fontWeight: 'bold',
        fontSize: 16
    }
})