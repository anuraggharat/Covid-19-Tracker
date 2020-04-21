import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Modal, ScrollView } from 'react-native';
import {LineChart,ProgressChart} from "react-native-chart-kit";
import Card from './Components/Card'
import { Dimensions } from "react-native";
import Colors from './Constants/Colors'

export default function App() {
  const [modal,setModal] = useState(false)
  const [deaths,setDeaths] = useState([])
  const [recovered,setRecovered] =useState([])
  const [date,setDate]=useState([])
  const [total,setTotal]= useState([])

  let countryCount = []

  
  //async function to fetch data
  async function fetchData(){
    const res = await fetch('https://pomber.github.io/covid19/timeseries.json')
    const data =await res.json()
    countryCount = data.India
    setTotal(countryCount.map(item=>item.confirmed))
    setRecovered(countryCount.map(item=>item.recovered))
    setDeaths(countryCount.map(item=>item.deaths))
    setDate(countryCount.map(item=>item.date))
   
    
    
    // console.log("deaths", deaths)
    // console.log("recovered", recovered)
  }
  useEffect(()=>{
    fetchData()
  },[])
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };
  let dead=deaths.slice(-1)[0]
  let count=total.slice(-1)[0]
  let recovery=recovered.slice(-1)[0]
  let latest=date.pop()
  console.log("total", count)
  const showStatsForCountry=()=>{
    setModal(!modal)
  }
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        {/* This view will hold the header section */}
        <Text style={styles.heading}>Covid-19 Tracker</Text>
      </View>

      <View style={styles.chartHolder}>
        {/* This view will hold the graph */}
        <ScrollView>
        <View style={styles.chart}>
          

          
  <View style={styles.countstatus}><Text style={styles.subheading}>Death Toll{latest}</Text></View>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          data: total
        }
      ]
    }}
    width={Dimensions.get("window").width*.95} // from react-native
    height={320}
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
      marginVertical: 8,
      borderRadius: 16,
      padding:5
    }}
  />
</View>
<View style={styles.chart}>
<ProgressChart
  data={data}
  width={Dimensions.get("window").width*.95} // from react-native
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
</View>
</ScrollView>
                <Text style={styles.country} >Country: INDIA</Text>

          </View>
      
              <View style={styles.stats}>
                <View style={styles.cardHolder}>
                  <Card 
                  style={{color:"#74B9FF"}} 
                  no={count} 
                  name="Total"
                  ></Card>
                  <Card 
                  style={{color:"#E71C23"}} 
                  no={dead}
                  name="Deaths"
                  ></Card>
                  <Card 
                  style={{color:"#2ecc72"}} 
                  no={recovery} 
                  name="Recovered"></Card>
                </View>
                <View style={styles.countDate}><Text>Count as per the date 24 April</Text></View>
                <View style={styles.buttonHolder}><Button color="green" onPress={showStatsForCountry} style={styles.btn} title="Change Country" ></Button></View>
              </View>
      
                <Modal animationType="slide" visible={modal}  >
                  <View style={styles.modal}>
         
                  <Button title="search" color="blue" onPress={showStatsForCountry}></Button>
                  </View>
                </Modal>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFF3'
  },
  heading:{
    fontSize:30
  },
  chart:{
    width:"100%",

    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    alignContent:"center"
  },
  header:{
    width:'100%',
    height:"10%",
    paddingTop:40,
    paddingLeft:20,
    borderBottomColor:"grey",
    borderBottomWidth:2
    
  },
  subheading:{
    fontSize:30
  },
  country:{
    fontSize:30,
  },
  buttonHolder:{
    paddingHorizontal:50,
    justifyContent:"center",
    paddingTop:20,
    borderRadius:50
  },
  countstatus:{
    display:"flex",
    justifyContent:"center",
    paddingLeft:30,
    fontSize:30
  },
  countDate:{
    textAlign:"center",
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  chartHolder:{
    height:"55%",
    alignItems:"center",
    justifyContent:'center',
    alignContent:'center'
  },
  chart:{
    shadowColor:'#000',
    shadowOffset:{  width: 100,  height: 100,  },
    shadowOpacity:1,
    elevation:10
    
  },
  stats:{
    flex:1,
    width:"100%",
    
  },
  cardHolder:{
    paddingVertical:20,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    shadowColor:"red",
    shadowOffset:{height:20,width:20},
    shadowOpacity:1
  },
  modal:{
    width:"100%",
    alignItems:"center",
    paddingHorizontal:50,
    justifyContent:"center",
    flex:1

  }
});
