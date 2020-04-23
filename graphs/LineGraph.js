import React from 'react'
import { View,Dimensions } from 'react-native'
import {LineChart} from 'react-native-chart-kit'


export default function LineGraph() {
    return (
        <View>
            <LineChart
    data={{
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          data: ["20","40","50"]
        }
      ]
    }}
    width={Dimensions.get("window").width*.90} // from react-native
    height={350}
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#FFF",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
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
