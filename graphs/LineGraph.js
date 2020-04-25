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
    width={Dimensions.get("window").width*.90} // from react-native
    height={350}
    withInnerLines={false}
    withShadow={false}
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#c2e9fb",
      backgroundGradientTo: "#a1c4fd",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "2",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
   
    style={{
      width:"100%",
      marginTop:20,
      marginleft:5
    }}
  />
        </View>
    )
}
