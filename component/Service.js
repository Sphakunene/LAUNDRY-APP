import { Pressable, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const service = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
     
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry"
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
     
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
   
  ];

const Service = () => {
  return (
    <View style={styles.serviceContainer}>
        <Text style={styles.serviceText}>Service Available</Text>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {service.map((item) => (
            <View style={styles.item}>
             <Pressable key={item.id} >
             <Image source={{uri:item.image}} style={{width:90,height:90}}/>
             <Text>{item.name}</Text>
            </Pressable>
            </View>
        )
    )}
        
       
     </ScrollView>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
    serviceContainer:{
        marginVertical:10, 
    },
    item:{
        margin:10,
        padding:10,
        backgroundColor:'#ccc'
    },
    serviceText:{
        fontSize:18,
        fontWeight:'bold',
        marginRight:12,

    }


})