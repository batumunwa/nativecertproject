import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useGetMoviesQuery } from '../features/APISlice'

export default function Home({navigation}) {
    const {data, error, isLoading} = useGetMoviesQuery();
  return (
    <View style={{padding:'5px'}}>
    <View>
    <Text style={{borderBottom:"1px solid #ccc", fontSize:"18px", fontWeight:"bold"}}>Latest Movie</Text>
    </View>
      {data?.map((item) => (
        <View style={{padding:'12px'}}>
          <Image
            source={{
            uri: item.image,
            }}
            style={{ width: 200, height: 200 }}/>
            <Text style = {styles.menuName}>{item.name}</Text>
            <View  style={styles.menuDescriptionContainer}>
              <Text style={{fontStyle:'italic'}}>{item.description}</Text>
               <View
                style={{
                    flexDirection: 'row',
                }}>
                <View style={{flex: 0.4}}>
                    <View style={{backgroundColor:'#d46201', height:'40px', fontWeight:'bold', color:'#ffffff', alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                      Rating: {item.rating}
                    </View>
                </View>
                <View style={{flex: 0.3}}/>
                <View style={{flex: 0.3}}>
                    <Button
                        title="Details"
                        onPress={() => {
                          /* 1. Navigate to the Details route with params */
                          navigation.navigate('Details', {
                            itemId: item.id
                          });
                        }}
                    />
                </View>
                </View>
            </View>
        </View>
      ))}
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
