import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Modal, ScrollView } from 'react-native';
import {ProgressChart,BarChart,ContributionGraph} from "react-native-chart-kit";
import Card from './Components/Card'
import { Dimensions } from "react-native";
import Colors from './Constants/Colors'
import LineGraph from './graphs/LineGraph'
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
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  const datas = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
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
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.heading}>Covid-19 Tracker</Text>
      </View>

      <View style={styles.displayHolder}>
      
        <ScrollView horizontal>

        <View style={styles.display}>
          <LineGraph data={total} />
          <View style={styles.centerText}>
            <Text style={styles.primaryText}>Total Infected</Text>
            
          </View>

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
<View style={styles.chart}>
<BarChart

  data={datas}
  width={Dimensions.get("window").width*.95} // from react-native
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
</View>
<View style={styles.chart}>
<ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
  width={Dimensions.get("window").width*.95}
  height={220}
  chartConfig={chartConfig}
/>
</View>
</ScrollView>
            

          </View>
      
              <View style={styles.stats}>
                <View style={styles.bottomcard}>
                <View style={styles.centerText}>
                    <Text style={styles.primaryText}>Country:India</Text>
                </View>
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
                
                <View style={styles.centerText}>
                <Text style={styles.secondaryText}>{latest}</Text>
                </View>
                <View style={styles.buttonHolder}>
                  <Button color="green" onPress={showStatsForCountry} style={styles.btn} title="Change Country" ></Button>
                </View>
                
                </View>
              </View>
      
                <Modal animationType="slide" visible={modal}  >
                  <View style={styles.modal}>
         
                  <Button title="search" color="blue" onPress={showStatsForCountry}></Button>
                  </View>
                </Modal>
  
    </View>
    // endofcontainer
  );
}

const styles = StyleSheet.create({
  primaryText:{
    fontSize:30,
    color:"black"
  },
  secondaryText:{
    fontSize:20,
    color:"grey"
  },
  tertiaryText:{
    fontSize:10,
    color:"black"
  },  
  container: {
    flex: 1,
    backgroundColor: '#EEEFF3'
  },
  heading:{
    fontSize:20
  },
  header:{
    width:'100%',
    height:"10%",
    paddingTop:40,
    paddingLeft:20,    
  },
  displayHolder:{
    height:"55%",
    padding:"0%"
  },
  display:{
    height:"100%",
    marginHorizontal:20,
    borderRadius:30,
    padding:0, 
    backgroundColor:"white"
  },
  chart:{
    width:"100%",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    alignContent:"center"
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
    paddingTop:5,
    borderRadius:50
  },
  centerText:{
    display:"flex",
    justifyContent:"center",
    width:"100%",
    textAlign:"center",
    alignItems:"center",
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
  bottomcard:{
    width:"90%",
    backgroundColor:"white",
    height:"90%",
    margin:"5%",
    borderRadius:30,
  },
  stats:{
    height:"35%",
    width:"100%",
  },
  cardHolder:{
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
