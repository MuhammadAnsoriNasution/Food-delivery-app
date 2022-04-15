import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { cocolate, secondary100 } from '../../utils/colors';

type Props = {
    label: string,
    onPress: () => void
}
export default function HeaderProductCategory({ label, onPress }: Props) {
    return (
        <View>
            <View style={{ flexDirection: 'row', 'justifyContent': 'space-between' }}>
                <Text style={{ fontWeight: 'bold', color: cocolate }}>{label}</Text>
                <TouchableOpacity onPress={() => onPress}>
                    <Text style={{ fontWeight: 'bold', color: secondary100 }}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
