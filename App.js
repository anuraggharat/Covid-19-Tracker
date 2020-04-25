import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Modal, ScrollView } from 'react-native';
import Card from './Components/Card'
import LineGraph from './graphs/LineGraph'
import ProgressRing from './graphs/ProgressRing'
import BarGraph from './graphs/BarGraph';
import Heatmap from './graphs/Heatmap';


export default function App() {
  const [modal,setModal] = useState(false)
  const [deaths,setDeaths] = useState([])
  const [recovered,setRecovered] =useState([])
  const [date,setDate]=useState([])
  const [total,setTotal]= useState([])
  const [info,setInfo]=useState([])
  const [loading,setLoading] = useState(true)
  const [displayText,setDisplaytext]=useState("Infected People")
  let countryCount = []
  const d=["190","300","400","20"]

  //async function to fetch data
  async function fetchData(){
    const res = await fetch('https://pomber.github.io/covid19/timeseries.json')
    const data =await res.json()
    countryCount = data.India  
    setInfo(countryCount.map(item=>item.confirmed))  
    setTotal(countryCount.map(item=>item.confirmed))
    setRecovered(countryCount.map(item=>item.recovered))
    setDeaths(countryCount.map(item=>item.deaths))
    setDate(countryCount.map(item=>item.date))
    
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const changeInfo=(n,t)=>{
    setInfo(n)
    setDisplaytext(t)
  }
 
  

  let dead=deaths.slice(-1)[0]
  let count=total.slice(-1)[0]
  let recovery=recovered.slice(-1)[0]
  let latest=date.pop()
  
  const showStatsForCountry=()=>{
    setModal(!modal)
  }

  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.heading}>Covid-19 Tracker</Text>
      </View>

      <View style={styles.displayHolder}>
      
        <ScrollView horizontal>

        <View style={styles.display}>
         {loading ? <View ><Text>loading</Text></View> :  <LineGraph data={info} />}
          <View style={styles.centerText}>
            <Text style={styles.primaryText}>{displayText}</Text>
            <View style={styles.stateButton}>
              <View style={styles.btn}><Button title="Infected" color="#74B9FF" onPress={()=>changeInfo(total,"Infected People")}></Button></View>
              <View style={styles.btn}><Button title="Deaths" color="#E71C23" onPress={()=>changeInfo(deaths,"Dead People")}></Button></View>
              <View style={styles.btn}><Button title="Recovered"  color="#2ecc72" onPress={()=>changeInfo(recovered,"Recovered People")}></Button></View>
            
            
            
            </View>
          </View>
        </View>
        
        <View style={styles.display}>
          <ProgressRing />
          <View style={styles.centerText}>
            <Text style={styles.primaryText}>Total Infected</Text>  
          </View>
        </View>

        <View style={styles.display}>
          <BarGraph />
          <View style={styles.centerText}>
            <Text style={styles.primaryText}>Total Infected</Text>  
          </View>
        </View>

        <View style={styles.display}>
          <Heatmap deaths={deaths} total={total} recovered={recovered} date={date} />
          <View style={styles.centerText}>
            <Text style={styles.primaryText}>Total Infected</Text>  
          </View>
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
                  <Button color="green" onPress={showStatsForCountry}  title="Change Country" ></Button>
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
  btn:{
    marginVertical:10
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
  stateButton:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"

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
