import React, { useEffect } from 'react'
import { View ,StyleSheet,Text} from 'react-native'
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Piediagram({r,d,t}) {

  const deathrate=parseInt(d)*100/parseInt(t)
  
  const data = [
    {
      name: "Recovered",
      population: r,
      color: "#2ecc72",
      legendFontColor: "#2ecc72",
      legendFontSize: 15
    },
    {
      name: "Deaths",
      population: d,
      color: "#E71C23",
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

  console.log(d,r,t);
  
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
  <Text style={styles.secondaryText}>Current Death Rate is: <Text style={styles.primaryText}>{deathrate.toFixed(2)}</Text></Text>  

        </View>
    )
}
const styles = StyleSheet.create({
  primaryText:{
    fontSize:30,
    color:"grey",
    textDecorationLine:"underline"
  },
})