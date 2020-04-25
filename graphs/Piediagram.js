import React from 'react'
import { View } from 'react-native'
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Piediagram({r,d}) {


    
  const data = [
    {
      name: "Recovered",
      population: 2,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Deaths",
      population: 3,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  
  const chartConfig = {
    hasLegend:"false",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };


    return (
        <View style={{alignContent:"center",alignItems:"center"}}>
            <PieChart
  data={data}
  width={Dimensions.get("window").width*.90}
  height={350}
  hasLegend={false}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  absolute
  paddingLeft="80"
  style={{
    marginTop:20,
    padding:0
  }}

            />
        </View>
    )
}
