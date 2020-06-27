import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import lista from './src/lista'
import AddItem from './components/AddItem';


export default () => {
  const [items, setItems] = useState(lista);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Mercado</Text>
      <AddItem  items={items} setItems={setItems}/>
    <ScrollView style={styles.scroll} >

      {items.map((item, index)=>{
        return(
          <TouchableOpacity  activeOpacity={0.3} key={index} style={styles.viewlista}>
            <>
            <Text style={styles.testItem}>{item.task}</Text>
            <View style={styles.viewBolinha}></View>
            </>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    //alignItems: "center"

  },
  header: {
    fontSize: 25,
    marginTop: 30,
    textAlign: "center"
  },
  viewlista:{
    padding:10,
    flexDirection:"row"

  },
  scroll:{
    maxHeight:300,
    
  },
  testItem:{
    fontSize:20,
    flex:1

  },
  viewBolinha:{
    height:20,
    width:20,
    borderRadius:10,
    borderWidth:2,
    //borderColor:"#FFF"
  }
  

})