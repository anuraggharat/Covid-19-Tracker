import React from 'react'
import { View,StyleSheet } from 'react-native'
import {ActivityIndicator, Dimensions } from "react-native";

const Loading = () => {
   const width=Dimensions.get("window").width*.90
    return (
            <View style={styles.loadingscreen}>
                    <ActivityIndicator size="large" />
            </View>
    )
}
export default Loading
const styles=StyleSheet.create({
    loadingscreen:{
        height:350,
        width:"100%"
    }
})
