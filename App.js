import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Modal } from 'react-native';
import {LineChart,} from "react-native-chart-kit";
import Card from './Components/Card'
import { Dimensions } from "react-native";
import Colors from './Constants/Colors'

export default function App() {
  const [modal,setModal] = useState(false)
  const [deaths,setDeaths] = useState([])
  const [recovered,setRecovered] =useState([])
  const [total,setTotal]= useState([])
  var recovery,dead,count=0

  let countryCount = []
 
  
  //async function to fetch data
  async function fetchData(){
    const res = await fetch('https://pomber.github.io/covid19/timeseries.json')
    const data =await res.json()
    countryCount = data.India
    setTotal(countryCount.map(item=>item.confirmed))
    setRecovered(countryCount.map(item=>item.recovered))
    setDeaths(countryCount.map(item=>item.deaths))
    var tempTotal=total
    var tempDeath=deaths
    var tempRecovered=recovered
    recovery=tempRecovered.pop()
    dead=tempDeath.pop()
    count=tempTotal.pop()   
    // console.log("total", total)
    // console.log("deaths", deaths)
    // console.log("recovered", recovered)
  }
  const update=()=>{

  }


  

  useEffect(()=>{
    fetchData()
  },[])
  
  const screenWidth = Dimensions.get("window").width;
  
  const showStatsForCountry=()=>{
    setModal(!modal)
  }
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };
  
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
       
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
  };
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        {/* This view will hold the header section */}
        <Text style={styles.heading}>Covid-19 Tracker</Text>
      </View>

      <View style={styles.chartHolder}>
        {/* This view will hold the graph */}

                    <LineChart
                    style={styles.chart}
                    data={{
                    labels: ["January", "February", "March", "April"],
                    datasets: [
                    {
                      data: recovered
                    }
                  ]
                }}
                width={Dimensions.get("window").width*.95} // from react-native
                height={300}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} 
                chartConfig={{
                  backgroundColor: "#6750df",
                  backgroundGradientFrom: "#6750df",
                  backgroundGradientTo: "#ddd7ff",
                  decimalPlaces: 2, 
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
                bezier
              />

                <Text style={styles.country} >Country: INDIA</Text>

          </View>
      
              <View style={styles.stats}>
                <View style={styles.cardHolder}>
                  <Card style={{backgroundColor:"#74B9FF"}} no={count} ></Card>
                  <Card style={{backgroundColor:"#E71C23"}} no={dead}></Card>
                  <Card style={{backgroundColor:"#2ecc72"}} no={recovery} ></Card>
                </View>
                <View style={styles.countDate}><Text>*Count as per the date 24 April</Text></View>
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
  header:{
    width:'100%',
    height:"15%",
    paddingTop:50,
    paddingLeft:20
    
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
  btn:{
    borderRadius:20,
    color:"red",
    shadowColor:"red",
    shadowOffset:{height:20,width:20},
    shadowOpacity:1,
    elevation:5
  },
  countDate:{
    textAlign:"center",
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  chartHolder:{
    height:"50%",
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
