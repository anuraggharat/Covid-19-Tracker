import React from 'react'
import { View,StyleSheet,Text, ShadowPropTypesIOS } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card,...props.style}} >
                <Text style={{...styles.count,...props.style}}>{props.no}</Text>
    <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        height:150,
        margin:0,
        width:"30%",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        },
    count:{
        fontSize:30,

    },
    name:{
        fontSize:20,
        color:"black"
    }
    
  });
  
export default Card
