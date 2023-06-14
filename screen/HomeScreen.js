import { SafeAreaView, StyleSheet, Text, View, Alert, Pressable, Image, TextInput, ScrollView } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import Carousel from '../component/Carousel'
import Service from '../component/Service'
import DressedItem from '../component/DressedItem'




const HomeScreen = () => {

  const [displayCurrentLocation, setDisplayLocation] = useState('We are loading your location');
  const [locationServiceEnabled, setLocationServiceEnable] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enable = await Location.hasServicesEnabledAsync();
    if (!enable) {
      Alert.alert('Locaion is not enable', 'Please enable the Location', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else {
      setLocationServiceEnable(enable);
    }
  }
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Allow the App to use locatop service', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({ latitude, longitude });


      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`
        setDisplayLocation(address);
      }
    }
  } 
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.topContent}>
        <Ionicons name="location-sharp" size={24} color="#E32636" />
        <View>
          <Text style={styles.homeText}>Home</Text>
          <Text>{displayCurrentLocation}</Text>
        </View>
        <Pressable style={styles.imagePressable}>
          <Image style={styles.image} source={require('../assets/spha.jpg')} />
        </Pressable>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.searchInput} />
        <EvilIcons name="search" size={24} color="#E32636" />
      </View>
      <ScrollView >
      <Carousel />
     
      <Service />
      {services.map((item,index)=>(
        <DressedItem item={item} key={index} />
      ))}
      </ScrollView>
    </SafeAreaView>

  );
}

export default HomeScreen

const styles = StyleSheet.create({
  homeText: {
    fontWeight: 600,
    fontSize: 18,

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imagePressable: {
    marginLeft: 'auto',
  },
  search: {
    flexDirection: 'row',
    marginLeft: 5,
    marginVertical: 10,
    padding: 7,
    borderWidth: 0.8,
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderRadius: 7,
  },
  searchInput: {
    width: '95%',
  }
});