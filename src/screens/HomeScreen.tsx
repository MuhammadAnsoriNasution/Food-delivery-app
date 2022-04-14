import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cocolate, white } from '../utils/colors';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: white,
            paddingHorizontal: 10,
            paddingTop: 20
        }}>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hey There!</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: cocolate }}>Find your meal now</Text>

        </SafeAreaView>
    );
}

