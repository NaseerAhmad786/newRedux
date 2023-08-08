import { StyleSheet, Text, View,Image, Button, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Product from '../components/product'


const HomeScreen = ({navigation}) => {
  const products = [
    {
        name :"Nokia 1",
        color : "white",
        price : 3000,
        image : "https://www.pngkit.com/png/full/24-246841_nokia-nokia-6-android-one.png"
    },
    {
        name :"Nokia 2",
        color : "white",
        price : 2000,
        image : "https://www.pngkit.com/png/full/24-246841_nokia-nokia-6-android-one.png"
    },
    {
        name :"Nokia 3",
        color : "white",
        price : 4000,
        image : "https://www.pngkit.com/png/full/24-246841_nokia-nokia-6-android-one.png"
    }
  ]
  return (
    <View style={{flex:1}}>
        <Button title='userScreen' onPress={()=>{navigation.navigate("UserList")}} />
      <Header/>
    <ScrollView>
    {
        products.map((item,index)=>
        <Product item={item} key={index}/>
        )
      }
    </ScrollView>
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})