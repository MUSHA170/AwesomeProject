import React,{useState} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import Home from './componentes/home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottonTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
//meus componentes
import Header from './componentes/header'
import NavBAR from './componentes/barra-nav'
import Listareceitas from './componentes/Lista-receitas'
import Apiteste from './componentes/fetch'
import Comida from './componentes/singlefood'
import AsyncStorage from '@react-native-async-storage/async-storage';
//teste/////teste/////teste/////teste/////teste///
export default function App() {
  const[Receitas,AddReceitas] = useState(3)

  function carregarmais() {
    return(
      <Apiteste/>
    )
  }
  
  ////////ascyn storage
  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      alert(keys)
    } catch(e) {
        alert("erro")
    }
  }


//////////////async sotrage
  const[numero,setnumero] = useState(0)

  const[user,setUser]=useState({
    id:1,
    name:'limao',
    photo:'https://www.themealdb.com/images/ingredients/Lime.png'
});

  return (
    <View >
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground  style = {styles.bkgimg}  imageStyle={{borderBottomLeftRadius: 36,borderBottomRightRadius: 36,}}source={require('./assets/hero-photo.png')} resizeMode="cover">
                <Text style={styles.img}>Home</Text>
                <Text style={{fontSize:30,fontFamily:'Acumin-RPro',alignSelf:'center', marginTop:380,color:'#7bed8d'}}>Ovada</Text>
                <Text style={{fontSize:15,fontFamily:'Acumin-RPro',alignSelf:'center',color:'#fff'}}>Receita do dia</Text>
            </ImageBackground>
            <Header/>
                <Text>====TESTE</Text>
                <TouchableOpacity  onPress={()=>{ getAllKeys()}}>
                                                <Ionicons name="subway" size={24} color="black" />
                </TouchableOpacity>
            <Listareceitas/>
            <Comida/>
            <Apiteste/>
            <Apiteste/>


    
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //paddingTop:10,
  },
  bkgimg:{
    width:'100%',
    height:550,
    
  },
  img: {
    color: 'white',
    fontSize: 20,
    marginTop: 35,
    alignSelf:'center',
    fontFamily:'Acumin-RPro',

  },
 
});
