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
        borderRadius:20,
        width:"30%",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
        },
    count:{
        fontSize:40,
        color:"white"
    },
    name:{
        fontSize:20,
        color:"grey"
    }
    
  });
  
export default Card
