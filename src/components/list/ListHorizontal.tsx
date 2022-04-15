import React, { ReactNode } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { danger100, secondary100, white } from '../../utils/colors';
import HeaderProductCategory from '../headers/HeaderProductCategory';


type Props = {
    label: string,
    onPressSeeAll: () => void,
    data: any[],
    renderItem: ({ item, index }: { item: any, index?: number }) => ReactNode,
    onPress: () => void,
    top: number
}
export default function ListHorizontal({ label, onPressSeeAll, data, renderItem, top }: Props) {
    return (
        <View style={{ marginTop: top }}>
            <HeaderProductCategory label={label} onPress={() => onPressSeeAll()} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scrollView}
            >
                {
                    data.map((item, index) => {
                        return renderItem({ item, index })
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    scrollView: {
        flexGrow: 0,
        marginTop: 10,
        marginHorizontal: -10,
    }
})