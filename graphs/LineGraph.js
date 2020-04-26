import React from 'react'
import { View,Dimensions } from 'react-native'
import {LineChart} from 'react-native-chart-kit'


export default function LineGraph(props) {
    return (
        <View>
            <LineChart
    data={{
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          data:props.data
        }
      ]
    }}
    width={Dimensions.get("window").width*.85} // from react-native
    height={Dimensions.get("window").height*0.40}
    withInnerLines={false}
    withShadow={false}
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#accbee",
      backgroundGradientTo: "#4481eb",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "2",
        strokeWidth: "2",
        stroke: "#fee140"
      }
    }}
   
    style={{
      width:"100%",
      marginTop:20,
      marginleft:5,
      paddingHorizontal:10
    }}
  />
        </View>
    )
}
