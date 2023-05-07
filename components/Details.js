import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useGetMovieByIDQuery } from '../features/APISlice';
import Moment from 'moment';

export default function Details({route, navigation}) {
  const { itemId } = route.params;
  const {data, error, isLoading} = useGetMovieByIDQuery(itemId);
  return (
    <View style={{padding:'5px'}}>
     <View style={{
        flexDirection: 'row', borderBottom:"2px solid #ccc", padding:"7px"
    }}>
     <View style={{flex: 0.23}}>
     <Image
            source={{
            uri: data?.image,
            }}
            style={{ width: 400, height: 400 }}/>
     </View>
     <View style={{flex: 0.77}}>
      <Text style={{fontSize:"24px", padding:"5px", borderBottom:"1px solid #ccc"}}>Movie Name: {data?.name}</Text>
      <Text style={{fontSize:"24px", padding:"5px", borderBottom:"1px solid #ccc"}}>Rating: {data?.rating}</Text>
      <Text style={{fontSize:"24px", padding:"5px", borderBottom:"1px solid #ccc"}}>Realsed Date: {Moment(data?.releaseddate).format('YYYY-MM-DD')}</Text>
      <Text style={{fontSize:"24px", padding:"5px", borderBottom:"1px solid #ccc"}}>Duration: {data?.duration} Minutes</Text>
      <Button
      title='Book Now'
      onPress={() => {
        navigation.navigate('Booking', {
          movieData: data
        });
      }}/>
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