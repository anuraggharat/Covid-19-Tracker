import React from 'react'
import { View } from 'react-native'
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function BarGraph({data}) {
 


      const jan= data.filter(item=>item.date=="2020-1-31")
      const janCount= jan[0].confirmed
      const feb= data.filter(item=>item.date=="2020-2-29")
      const febCount= feb[0].confirmed-janCount
      const march= data.filter(item=>item.date=="2020-3-31")
      const marchCount= march[0].confirmed-feb[0].confirmed-janCount
      const april= data.slice(-1)[0]
      const aprilCount= april.confirmed-march[0].confirmed-feb[0].confirmed-janCount
     // console.log(jan,feb,march,april)
     // console.log("this is the fucking Jan count",janCount)

      const datas = {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            data: [janCount,febCount,marchCount,aprilCount]
          }
        ]
      };

      // console.log(datai);
      
      
      const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#fafafa",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `#192A56`,
        decimalPlaces: 0,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1
      }
    
    return (
            <View >
                <BarChart
                showBarTops={false}
                withInnerLines={false}
                data={datas}
                decimalPlaces={false}
                width={Dimensions.get("window").width*.85} // from react-native
                height={320}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                style={{
                  paddingHorizontal:10,
                  paddingTop:20
                }}
                />
            </View>
    )
}
