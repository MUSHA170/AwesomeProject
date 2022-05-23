import React,{useState} from 'react';
import {StyleSheet,
        Text,
        View,
        Image,
        ImageBackground,
        SafeAreaView,
        ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottonTabNavigator } from '@react-navigation/bottom-tabs';
//////////////////meus componentes//////////////
//import Home from './componentes/home'
import Header from './componentes/header'
//import NavBAR from './componentes/barra-nav'
import Listareceitas from './componentes/Lista-receitas'


//Telas
const Tela = createBottonTabNavigator();

function Home({navigation}){
  return(
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground  style = {styles.bkgimg}  imageStyle={{borderBottomLeftRadius: 36,borderBottomRightRadius: 36,}}source={require('./assets/hero-photo.png')} resizeMode="cover">
                <Text style={styles.img}>Home</Text>
                <Text style={{fontSize:30,fontFamily:'Acumin-RPro',alignSelf:'center', marginTop:380,color:'#7bed8d'}}>Ovada</Text>
                <Text style={{fontSize:15,fontFamily:'Acumin-RPro',alignSelf:'center',color:'#fff'}}>Receita do dia</Text>
            </ImageBackground>
            <Header/>
            <Text>{user.name}</Text>
            <Image style={{width:100,height:100,}} source={{uri:user.photo}}/>
            <Listareceitas/>
            <Listareceitas/> 
        </SafeAreaView>
      </ScrollView>
    </View>
    );
}

function Telasalvos({navigation}){
  return(
     <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'lightgrey',}}>
       <Text>Tela Salvos</Text>
     </View>
    );
}



export default function App() {

  const[user,setUser]=useState({
    id:1,
    name:'limao',
    photo:'https://www.themealdb.com/images/ingredients/Lime.png'
});


  return (
    <NavigationContainer>
      <Tela.Navigator initialRouteName="Home">
        <Tela.Screen name="Home" componente={Home}/>
        <Tela.Screen name="Telasalvos" componente={Telasalvos}/>
      </Tela.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  teste: {
    height: '50%',
    width: '90%',
    backgroundColor: '#AAA',
    marginTop: 100,
  },
 
});
