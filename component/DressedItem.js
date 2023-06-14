import { Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const DressedItem = (props) => {
  return (
    
    <View >
   <Pressable style={styles.card} >
    <View>
    <Image source={{uri:props.item.image}} style={{width:70,height:70}}></Image>
    </View>
    <View style={{margin:5}}>
        <Text style={{width:83,fontSize:17,fontWeight:500}}>{props.item.name}</Text>
        <Text style={{width:83,fontSize:15, color:'gray'}}>${props.item.price}</Text>
    </View>
    <Pressable >
        <Text style={styles.button} >Add</Text>
    </Pressable>
    </Pressable>
    </View>
  )
}

export default DressedItem

const styles = StyleSheet.create({
    card:{
        margin:8,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"center",
        backgroundColor:'#ccc', 
        padding:10, 
        marginRight:2,   
    },
    button:{
        borderWidth:0.8,
        borderColor: "#088F8F",
        borderRadius: 10,
        width: 55,
        height:34,
        textAlign:'center',
        color:"#088F8F",
        padding:8,
  
 }
})