import React from 'react'
import { View,StyleSheet } from 'react-native'
import {ActivityIndicator, Dimensions } from "react-native";

export const Loading = () => {
    width=Dimensions.get("window").width*.90
    return (
            <View style={styles.loadingscreen}>
                    <ActivityIndicator size="large" />
            </View>
    )
}
const styles=StyleSheet.create({
    loadingscreen:{
        height:350,
        width:{width}
    }
})
