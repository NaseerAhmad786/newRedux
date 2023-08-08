import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch,useSelector } from 'react-redux'

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.reducer);
  const [isAdded,setIsAdded]=useState(false)
 const handleRemoveFromCart =  item =>{
dispatch(removeFromCart(item.name))
 }
  const handleAddToCart = item => {
dispatch(addToCart(item))


  };
  useEffect(()=>{
 let result = cartItems.filter((ele)=>{
  return ele.name === item.name
 })
if(result.length)
{
  setIsAdded(true)
}else{
  setIsAdded(false)
}
  },[cartItems])
  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Text style={{}}>{item.name}</Text>
      <Text style={{}}>{item.color}</Text>
      <Text style={{}}>{item.price}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {
        isAdded ? 
        <Button title="remove to cart" onPress={() => handleRemoveFromCart(item)} />
        :
        <Button title="add to cart" onPress={() => handleAddToCart(item)} />
      }
      
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
