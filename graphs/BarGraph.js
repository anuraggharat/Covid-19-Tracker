import React from 'react'
import { View } from 'react-native'
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function BarGraph({data}) {
 


      const jan= data.filter(item=>item.date=="2020-1-31")
      const janCount= jan.confirmed
      const feb= data.filter(item=>item.date=="2020-2-29")
      const febCount= feb.confirmed
      const march= data.filter(item=>item.date=="2020-3-31")
      const marchCount= march.confirmed
      const april= data.slice(-1)[0]
      const aprilCount= april.confirmed
      console.log(jan,feb,march,april)

      const datas = {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            data: [janCount,febCount, marchCount,aprilCount]
          }
        ]
      };

      // console.log(datai);
      
      
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5
      }
    
    return (
            <View >
                <BarChart

                data={datas}
                width={Dimensions.get("window").width*.95} // from react-native
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                />
            </View>
    )
}
