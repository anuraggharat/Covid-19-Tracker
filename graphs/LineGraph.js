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
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#DAE0E2",
      decimalPlaces: 0,
      color: (opacity = 1) => `#FAD02E`,
      labelColor: (opacity = 0) => `#2B2B52`,
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
