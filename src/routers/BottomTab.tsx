import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { danger100, secondary, white } from '../utils/colors';
import routes from './routes';
const Tab = createBottomTabNavigator();

const ItemTab = ({ focused, children, color }: { focused: boolean, children: ReactNode, color: string }) => {
    return <View style={{ alignItems: 'center' }}>
        {children}
        {
            focused ? <View style={{ width: 5, height: 5, backgroundColor: color, borderRadius: 5, position: 'absolute', bottom: -8, }} /> : null
        }
    </View>
}
export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: ReactNode;
                    let colorActive = focused ? danger100 : secondary

                    if (route.name === routes.home.name) {
                        iconName = <Ionicons name={'home'} size={size} color={colorActive} />
                    } else if (route.name === routes.news.name) {
                        iconName = <Fontisto name={'messenger'} size={size} color={colorActive} />;
                    } else if (route.name === routes.notifikasi.name) {
                        iconName = <Fontisto name={'bell-alt'} size={size} color={colorActive} />;
                    } else if (route.name === routes.account.name) {
                        iconName = <FontAwesome name={'user-circle-o'} size={size} color={colorActive} />;
                    }
                    return <ItemTab focused={focused} color={colorActive}>
                        {iconName}
                    </ItemTab>;
                },
                tabBarLabel: '',
                tabBarLabelStyle: {
                    height: 0
                },
                tabBarStyle: {
                    backgroundColor: white,
                    height: 60
                },
            })
            }
        >
            <Tab.Screen name={routes.home.name} component={routes.home.component} />
            <Tab.Screen name={routes.news.name} component={routes.news.component} />
            <Tab.Screen name={routes.notifikasi.name} component={routes.notifikasi.component} />
            <Tab.Screen name={routes.account.name} component={routes.account.component} />
        </Tab.Navigator>
    );
}
