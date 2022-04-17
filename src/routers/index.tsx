
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import routes from './routes';

const Stack = createNativeStackNavigator();


export default function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name={routes.detail.name} component={routes.detail.component} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
