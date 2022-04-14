import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { danger, danger100, secondary, secondary100, white } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function InputSearch() {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.container}>
                <Icon name='search' size={20} color={secondary100} />
                <TextInput style={styles.input} placeholder="Search" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Fontisto name='neuter' color={white} size={16} />
                <Fontisto name='neuter' color={white} size={16} style={{ transform: [{ rotateX: '180deg' }], marginLeft: 3 }} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: secondary,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1
    },
    input: {
        paddingVertical: 8,
        paddingLeft: 10,
        fontSize: 16,
        flex: 1
    },
    button: {
        flexDirection: 'row',
        backgroundColor: danger100,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginLeft: 5,
        borderRadius: 10
    }
})