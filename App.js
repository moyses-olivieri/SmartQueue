import React, {useState,useEffect} from 'react';
import { Text, View,StyleSheet, Button, Alert, Image, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from './assets/CSS/Css';
import Logincadastro from './views/Logincadastro';
import Login from './views/Login';
import { Telainicial } from './views/Index';
import { Agendamentos } from './views/Index';
import { Fila } from './views/Index';
import {Carregamento} from './views/Index';
import Geolocation from '@react-native-community/geolocation';
import { platform } from 'ios';





export default function App() {

    const [currentLatitude, setCurrentLatitude] = useState('');
    const [currentLongitude, SetCurrentLongitude] = useState('');
    const [wacthID, setWacthID] = useState('');

    const callLocation = () => {
        if (platform.OS = 'ios') {
          getLocation();
        } else{
          const requestLocationPermission = async () => {
            PermissionAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Permissão de acesso a Localização",
              message: "Este aplicativo precisa acessar sua localização",
              buttonNeutral: "Pergunte-me depois",
              buttonNegative: "Cancelar",
              ButtonPositive: "Ok",
            }
          };
          if(granted === PermissionsAndroid.RESULTS.GRANTED){
            getLocation();
          }else{
            alert('Permissão de Localização Negada')
          }
        };
        requestLocationPermission();
      
    }

    const getLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const currentLatitude = JSON.stringify(position.coords.latitude);
          const currentLongitude = JSON.stringify(position.coords.longitude);
          setCurrentLatitude(currentLatitude);
          SetCurrentLongitude(currentLongitude);
          
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
          );
      const wacthID = Geolocation.watchPosition((position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
          const currentLongitude = JSON.stringify(position.coords.longitude);
          setCurrentLatitude(currentLatitude);
          SetCurrentLongitude(currentLongitude);

      });
      setWacthID(wacthID);
    }
    const clearLocation = () => {
      Geolocation.clearWatch(wacthID);
    }

    return(
        <View Style = {Style.container}>
          <Text style = {Style.boldText}>
          Você está aqui
          </Text>
          <Text style = {style.text}>
            Latitude: {currentLatitude}
          </Text>
          <Text style = {style.text}>
          Longitude: {currentLongitude}
          </Text>
          <View style = {style.button}>
            <Button title ="Obter minha localização" onPress={callLocation}/>
          </View>
          <View style = {style.button}>
            <Button title= "Cancelar monitoramento" onPress={clearLocation}/>
          </View>
        </View>
    );

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Logincadastro" 
          component={Logincadastro}
          options={{
            title:"SmartQueue", 
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center', fontSize:22}
          }} />
          <Stack.Screen name="Login" /*options={{headerShown:false}}*/ component={Login} />
         {/* <Stack.Screen name="Cadastro" component={Cadastro} />*/}
          <Stack.Screen name="Telainicial" 
          component={Telainicial}
          options={{
            title:"Início",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
          <Stack.Screen name="Agendamentos" 
          component={Agendamentos}
          options={{
            title:"Agendamentos",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
        
          <Stack.Screen name="Fila" 
          component={Fila}
          options={{
            title:"Fila",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
           <Stack.Screen name="Carregamento" 
          component={Carregamento}
          options={{
            title:"Carregamento",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}



