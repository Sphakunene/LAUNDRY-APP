import { SafeAreaView, StyleSheet, Text, View,Alert, Pressable ,Image, TextInput} from 'react-native'
import  * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { SliderBox } from "react-native-image-slider-box";



const HomeScreen = () => {

const [displayCurrentLocation,setDisplayLocation] =useState('We are loading your location');
const[locationServiceEnabled,setLocationServiceEnable] = useState(false);
useEffect(()=>{
 checkIfLocationEnabled();
 getCurrentLocation();
},[]);

const checkIfLocationEnabled = async () => {
    let enable  = await Location.hasServicesEnabledAsync();
    if(!enable){
      Alert.alert('Locaion is not enable', 'Please enable the Location', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else{
      setLocationServiceEnable(enable);
    }
}
const getCurrentLocation = async () =>{
  let{status} =await Location.requestForegroundPermissionsAsync();
  if(status !== 'granted'){
    Alert.alert('Permission denied', 'Allow the App to use locatop service', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  const{coords} = await Location.getCurrentPositionAsync();

  if(coords){
    const{latitude,longitude}=coords;
    let response = await Location.reverseGeocodeAsync({latitude,longitude});


    for(let item of response){
      let address = `${item.name} ${item.city} ${item.postalCode}`
      setDisplayLocation(address);
    }
  }
  }

  return (
    <SafeAreaView>
      <View style={styles.topContent}>
      <Ionicons name="location-sharp" size={24} color="#E32636" />
        <View>
        <Text style={styles.homeText}>Home</Text>
      <Text>{displayCurrentLocation}</Text>
      </View>
      <Pressable style={styles.imagePressable}>
        <Image style={styles.image} source={require('../assets/spha.jpg')}/>
      </Pressable>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.searchInput}/>
        <EvilIcons name="search" size={24} color="#E32636" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  homeText:{
    fontWeight:600,
    fontSize:18,
    
  },
  image:{
      width:50,
      height:50,
      borderRadius:50,
  },
  topContent:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },
  imagePressable:{
      marginLeft:'auto',
  },
  search:{
    flexDirection:'row',
    marginLeft:5,
    marginVertical:10,
    padding:7,
    borderWidth:0.8,
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderRadius:7,
  },
  searchInput:{
    width:'95%',
  }
});