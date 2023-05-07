import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native'

export default function Booking({route, navigation}) {
  const { movieData } = route.params;
  return (
    <View style={{padding:'5px'}}>
      <View style={{padding:'4px'}}>
        <Text style={{fontSize:"18px", fontWeight:"bold"}}>Movie Name</Text>
        <TextInput editable={false}
         value={movieData?.name}
          style={{height: 30, border:"1px solid #ccc"}}
        />
      </View>
      <View style={{padding:'4px'}}>
        <Text style={{fontSize:"18px", fontWeight:"bold"}}>Duration</Text>
        <TextInput editable={false}
          value={movieData?.duration}
          style={{height: 30, border:"1px solid #ccc"}}
        />
      <View style={{padding:'4px'}}>
        <Text style={{fontSize:"18px", fontWeight:"bold"}}>Name</Text>
        <TextInput
          style={{height: 30, border:"1px solid #ccc"}}
        />
      </View>
      <View style={{padding:'4px'}}>
        <Text style={{fontSize:"18px", fontWeight:"bold"}}>Total Seats</Text>
        <TextInput
          style={{height: 30, border:"1px solid #ccc"}}
        />
      </View>
      <View style={{paddingTop:'10px'}}>
        <Button 
         title='Book'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
  menuName:{
    fontSize:'18px',
    fontWeight:'bold'
  },
  menuDescription:{
    fontSize:'14px',
    fontStyle:'italic'
  },
  menuDescriptionContainer:{
    flexGrow:1,
    width:300,
    flexDirection:"column",
    justifyContent:"center",
  },
})