import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react'
import { Splash } from "./screens/Splash";
import { Main } from './screens/Main'

const STACK1 = createStackNavigator()

const Navigation = () => {

    const [showSplash, setShowSplash] = useState(true)

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplash(false)
            }, 2000)
        }, []
    )

    return (
        <>
            <NavigationContainer>
                <STACK1.Navigator headerMode={'none'}>
                    <STACK1.Screen
                        name={showSplash ? 'Splash' : 'Main'}
                        component={showSplash ? Splash : Main}
                    />
                </STACK1.Navigator>
            </NavigationContainer>
        </>
    )
}

export { Navigation }
