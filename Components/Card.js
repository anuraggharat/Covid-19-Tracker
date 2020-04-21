import React from 'react'
import { View,StyleSheet,Text, ShadowPropTypesIOS } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card,...props.style}} >
                <Text style={styles.count}>{props.no}</Text>
                <Text style={styles.name}>Died</Text>
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
        
        color:"white"
        },
    count:{
        fontSize:40,
        color:"white"
    },
    name:{
        fontSize:20,
        color:"white"
    }
    
  });
  
export default Card
